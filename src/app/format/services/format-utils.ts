export const isSpanContainerCssClass = (node, cssClass) => node && node.nodeName === 'SPAN' && node.classList.contains(cssClass);

export const createSpan = (options: any) => {
  const { cssClass = '', textContent = '' } = options;
  const span = document.createElement('span');

  if (cssClass) {
    span.classList.add(cssClass);
  }

  if (textContent) {
    span.textContent = textContent;
  }

  return span;
};

export const updateSelectionStyle = (selection: Selection, cssClass?: string) => {
  return document.execCommand(cssClass);
};

export const replaceSelectionWithText = (selection: Selection, replaceTo: string) => {
  return document.execCommand('insertText', false, replaceTo);
};

export const getSelectionString = (selection: Selection) => {
  if (selection.rangeCount === 0) {
    return '';
  }

  const range = selection.getRangeAt(0);
  return range.toString();
};
