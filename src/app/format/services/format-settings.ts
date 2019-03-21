import { CSS_CLASSES, FORMAT, HANDLER_TYPES, ICON, LOAD_TYPE } from './format-types';

export const FORMAT_SETTINGS = {
  [FORMAT.BOLD]: {
    format: FORMAT.BOLD,
    icon: ICON[FORMAT.BOLD],
    handlerType: HANDLER_TYPES.DOCUMENT_EXEC,
    commandId: CSS_CLASSES.BOLD,
    canStore: true,
  },
  [FORMAT.ITALIC]: {
    format: FORMAT.ITALIC,
    icon: ICON[FORMAT.ITALIC],
    handlerType: HANDLER_TYPES.DOCUMENT_EXEC,
    commandId: CSS_CLASSES.ITALIC,
    canStore: true,
  },
  [FORMAT.UNDERLINE]: {
    format: FORMAT.UNDERLINE,
    icon: ICON[FORMAT.UNDERLINE],
    handlerType: HANDLER_TYPES.DOCUMENT_EXEC,
    commandId: CSS_CLASSES.UNDERLINE,
    canStore: true,
  },
  [FORMAT.COLOR]: {
    format: FORMAT.COLOR,
    icon: ICON[FORMAT.COLOR],
    handlerType: HANDLER_TYPES.DOCUMENT_EXEC,
    commandId: 'foreColor',
    canStore: true,
  },
  [FORMAT.SYNONYMUS]: {
    format: FORMAT.SYNONYMUS,
    icon: ICON[FORMAT.SYNONYMUS],
    handlerType: HANDLER_TYPES.DOCUMENT_EXEC,
    loadType: LOAD_TYPE.SYNONYMS,
    commandId: 'insertText',
    canStore: false,
  }
};
