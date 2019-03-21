export enum FORMAT {
  BOLD,
  ITALIC,
  UNDERLINE,
  SYNONYMUS,
  COLOR
}

export const ENABLED_FORMAT_TYPES = [
  FORMAT.BOLD,
  FORMAT.ITALIC,
  FORMAT.UNDERLINE,
  FORMAT.SYNONYMUS,
  FORMAT.COLOR
];

export enum CSS_CLASSES {
  BOLD = 'bold',
  ITALIC = 'italic',
  UNDERLINE = 'underline',
}

export enum HANDLER_TYPES {
  DOCUMENT_EXEC = 'document_exec',
}

export enum LOAD_TYPE {
  SYNONYMS = 'synonyms',
}

export const ICON = {
  [FORMAT.BOLD]: 'format_bold',
  [FORMAT.ITALIC]: 'format_italic',
  [FORMAT.UNDERLINE]: 'format_underline',
  [FORMAT.COLOR]: 'format_color_fill',
  [FORMAT.SYNONYMUS]: 'swap_horiz',
};

export interface IFormatSetting {
  format: FORMAT;
  icon: string;
  applyFormat: (selection: Selection, option?: string) => void;
  handlerType: HANDLER_TYPES;
  commandId?: string;
  canStore: string;
}

export interface IFormatComponent {
  format: FORMAT;
  settings: IFormatSetting;
}
