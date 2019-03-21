import { Injectable } from '@angular/core';
import { FORMAT_SETTINGS } from './format-settings';
import { FORMAT, HANDLER_TYPES, IFormatSetting } from './format-types';
import { getSelectionString, replaceSelectionWithText, updateSelectionStyle } from './format-utils';
import { TextService } from '../../shared/services/text-service/text.service';
import { SynonymsService } from '../../shared/services/synonyms/synonyms.service';

@Injectable()
export class FormatService {

  private settings = FORMAT_SETTINGS;
  private loadOptionsHandlers = {
    [HANDLER_TYPES.REPLACE]: this.loadReplaceOptions.bind(this)
  };

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

  updateSelectionFormat(setting: IFormatSetting, option?: string) {
    switch (setting.handlerType) {
      case HANDLER_TYPES.STYLE: {
        return updateSelectionStyle(this.selection, setting.cssClass);
      }
      case HANDLER_TYPES.REPLACE: {
        return replaceSelectionWithText(this.selection, option);
      }
    }
  }

  getOptions() {
    return this.synonymsService.options$;
  }

  loadFormatOptions(format: FORMAT) {
    const settings = this.getSettings(format);
    const handler = this.loadOptionsHandlers[settings.handlerType];

    handler(this.selection, settings);
  }

  private loadReplaceOptions(selection: Selection, settings?: IFormatSetting) {
    const word: string = getSelectionString(selection);
    this.synonymsService.load(word);
  };
}
