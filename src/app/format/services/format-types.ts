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
];

export enum CSS_CLASSES {
  BOLD = 'bold',
  ITALIC = 'italic',
  UNDERLINE = 'underline',
}

export enum HANDLER_TYPES {
  STYLE = 'style',
  REPLACE = 'replace',
}

export const ICON = {
  [FORMAT.BOLD]: 'format_bold',
  [FORMAT.ITALIC]: 'format_italic',
  [FORMAT.UNDERLINE]: 'format_underline',
  [FORMAT.COLOR]: 'format_color_selection',
  [FORMAT.SYNONYMUS]: 'swap_horiz',
};

export interface IFormatSetting {
  format: FORMAT;
  icon: string;
  applyFormat: (selection: Selection, option?: string) => void;
  handlerType: HANDLER_TYPES;
  cssClass?: CSS_CLASSES;
}

export interface IFormatComponent {
  format: FORMAT;
  settings: IFormatSetting;
}
