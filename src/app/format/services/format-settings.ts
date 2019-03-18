import { CSS_CLASSES, FORMAT, HANDLER_TYPES, ICON, IFormatSetting } from './format-types';
import { replaceSelectionWithText, updateSelectionCss } from './format-utils';

export const FORMAT_SETTINGS = {
  [FORMAT.BOLD]: {
    format: FORMAT.BOLD,
    icon: ICON[FORMAT.BOLD],
    handlerType: HANDLER_TYPES.STYLE,
    cssClass: CSS_CLASSES.BOLD,
  },
  [FORMAT.ITALIC]: {
    format: FORMAT.ITALIC,
    icon: ICON[FORMAT.ITALIC],
    handlerType: HANDLER_TYPES.STYLE,
    cssClass: CSS_CLASSES.ITALIC,
  },
  [FORMAT.UNDERLINE]: {
    format: FORMAT.UNDERLINE,
    icon: ICON[FORMAT.UNDERLINE],
    handlerType: HANDLER_TYPES.STYLE,
    cssClass: CSS_CLASSES.UNDERLINE,
  },
  [FORMAT.COLOR]: {
    format: FORMAT.COLOR,
    icon: ICON[FORMAT.COLOR],
    handlerType: 'style',
  },
  [FORMAT.SYNONYMUS]: {
    format: FORMAT.SYNONYMUS,
    icon: ICON[FORMAT.SYNONYMUS],
    handlerType: HANDLER_TYPES.REPLACE,
  }
};
