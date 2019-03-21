import { Injectable } from '@angular/core';
import { FORMAT_SETTINGS } from './format-settings';
import { FORMAT, HANDLER_TYPES, IFormatSetting } from './format-types';
import { getSelectionString, replaceSelectionWithText, updateSelectionStyle } from './format-utils';
import { TextService } from '../../shared/services/text-service/text.service';
import { SynonymsService } from '../../shared/services/synonyms/synonyms.service';
import { map } from 'rxjs/internal/operators';

@Injectable()
export class FormatService {

  private settings = FORMAT_SETTINGS;
  private loadOptionsHandlers = {
    [HANDLER_TYPES.REPLACE]: this.loadReplaceOptions.bind(this)
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

  updateSelectionFormat(setting: IFormatSetting, option?: string) {
    switch (setting.handlerType) {
      case HANDLER_TYPES.STYLE: {
        const isApplied = updateSelectionStyle(this.selection, setting.cssClass);

        if (isApplied) {
          this.storeAppliedStyles(this.selection, setting.cssClass);
        }

        return isApplied;
      }
      case HANDLER_TYPES.REPLACE: {
        return replaceSelectionWithText(this.selection, option);
      }
    }
  }

  //#region format options
  loadFormatOptions(format: FORMAT) {
    const settings = this.getSettings(format);
    const handler = this.loadOptionsHandlers[settings.handlerType];

    const selection = this.selection;

    if (selection.type !== 'Range' || (selection.type === 'Range' && selection.rangeCount === 0)) {
      return;
    }

    handler(selection, settings);
  }

  private loadReplaceOptions(selection: Selection, settings?: IFormatSetting) {
    const word: string = getSelectionString(selection);
    this.synonymsService.load(word);
  }

  //#endregion

  //#region styles
  createApplied(settings: IFormatSetting) {
    return this.textService.selection$.pipe(
      map(selection => selection.focusNode),
      map(focusNode => {
        console.info('[ FormatService createApplied() ] focusNode', focusNode);
        console.info('[ FormatService createApplied() ] this.selection', this.selection);
        return this.isStyleApplied(focusNode, settings.cssClass);
      })
    );
  }

  isStyleApplied(focusNode: Node, cssClass: string): boolean {
    if (this.appliedStylesMap.has(focusNode)) {
      const styles = this.appliedStylesMap.get(focusNode);
      return styles.includes(cssClass);
    }

    return false;
  }

  private storeAppliedStyles(selection: Selection, cssClass: string): void {
    const { focusNode } = selection;

    if (this.appliedStylesMap.has(focusNode)) {
      const originAppliedStyles = this.appliedStylesMap.get(focusNode);
      const appliedStyles = originAppliedStyles.includes(cssClass) ?
        originAppliedStyles.filter(c => c !== cssClass) :
        [...originAppliedStyles, cssClass];

      this.appliedStylesMap.set(focusNode, appliedStyles);
    } else {
      this.appliedStylesMap.set(focusNode, [cssClass]);
    }
  }

  //#endregion

}
