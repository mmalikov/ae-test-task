import { Injectable } from '@angular/core';
import { FORMAT_SETTINGS } from './format-settings';
import { FORMAT, LOAD_TYPE, IFormatSetting } from './format-types';
import { documentExecWithParam, getSelectionString } from './format-utils';
import { TextService } from '../../shared/services/text-service/text.service';
import { SynonymsService } from '../../shared/services/synonyms/synonyms.service';
import { map } from 'rxjs/internal/operators';

@Injectable()
export class FormatService {

  private settings = FORMAT_SETTINGS;
  private loadOptionsHandlers = {
    [LOAD_TYPE.SYNONYMS]: this.loadSynonyms.bind(this)
  };
  private appliedStylesMap = new WeakMap();

  get selection() {
    return this.textService.getSelection();
  }

  constructor(
    private textService: TextService,
    private synonymsService: SynonymsService,
  ) {
  }

  getSettings(format) {
    return this.settings[format];
  }

  getOptions() {
    return this.synonymsService.options$;
  }

  updateSelectionFormat(setting: IFormatSetting, commandParam?: string) {
    if (setting.canStore) {
      const handler = this.createStoreStyles(documentExecWithParam);
      return handler(this.selection, setting.commandId, commandParam);
    } else {
      return documentExecWithParam(setting.commandId, commandParam);

    }
  }

  //#region format options
  loadFormatOptions(format: FORMAT) {
    const settings = this.getSettings(format);
    const handler = this.loadOptionsHandlers[settings.loadType];

    const selection = this.selection;

    if (selection.type !== 'Range' || (selection.type === 'Range' && selection.rangeCount === 0)) {
      return;
    }

    handler(selection, settings);
  }

  clearFormatOptions() {
    this.synonymsService.clear();
  }

  private loadSynonyms(selection: Selection, settings?: IFormatSetting) {
    const word: string = getSelectionString(selection);
    this.synonymsService.load(word);
  }

  //#endregion

  //#region styles
  createApplied(settings: IFormatSetting) {
    return this.textService.selection$.pipe(
      map(selection => selection.focusNode),
      map(focusNode => this.isStyleApplied(focusNode, settings.commandId))
    );
  }

  isStyleApplied(focusNode: Node, style: string): boolean {
    if (this.appliedStylesMap.has(focusNode)) {
      const styles = this.appliedStylesMap.get(focusNode);

      return styles.includes(style);
    }

    return false;
  }

  checkStylesStoreReferentialIntegrity(mutation: MutationRecord) {
    for (const removedNode of Array.from(mutation.removedNodes)) {
      const node = this.findNodeInMap(removedNode);
      if (node) {
        this.appliedStylesMap.delete(node);
      }
    }
  }

  private createStoreStyles(cb) {
    return (...args: any[]) => {
      const [, ...withoutFirst] = args;
      const isApplied = cb.apply(this, withoutFirst);

      if (isApplied) {
        this.storeAppliedStyles.apply(this, args);
      }

      return isApplied;
    };
  }

  private findNodeInMap(node: Node) {
    if (this.appliedStylesMap.has(node)) {
      return node;
    } else if (node.childNodes) {
      Array.from(node.childNodes).forEach(childNode => this.findNodeInMap(childNode));
    } else {
      return null;
    }
  }

  private storeAppliedStyles(selection: Selection, commandId: string): void {
    const { focusNode } = selection;

    if (this.appliedStylesMap.has(focusNode)) {
      const originAppliedStyles = this.appliedStylesMap.get(focusNode);
      const appliedStyles = originAppliedStyles.includes(commandId) ?
        originAppliedStyles.filter(c => c !== commandId) :
        [...originAppliedStyles, commandId];

      if (appliedStyles.length) {
        this.appliedStylesMap.set(focusNode, appliedStyles);
      } else {
        this.appliedStylesMap.delete(focusNode);
      }
    } else {
      this.appliedStylesMap.set(focusNode, [commandId]);
    }
  }

  //#endregion

}
