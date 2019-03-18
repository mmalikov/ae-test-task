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

export const updateSelectionCss = (selection: Selection, cssClass?: string) => {
  const range = selection.getRangeAt(0);

  const startContainer = range.startContainer;
  const startContainerParent = startContainer.parentElement;

  if (isSpanContainerCssClass(startContainerParent, cssClass)) {
    startContainerParent.classList.remove(cssClass);
  } else {
    if (startContainerParent.nodeName === 'DIV') {
      const formattedText = createSpan({ cssClass });
      range.surroundContents(formattedText);
    } else {
      startContainerParent.classList.add(cssClass);
    }
  }
};

export const replaceSelectionWithText = (selection: Selection, replaceTo: string) => {
  const range = selection.getRangeAt(0);
  range.deleteContents();
  range.insertNode(document.createTextNode(replaceTo));
};

export const getSelectionString = (selection: Selection) => {
  const range = selection.getRangeAt(0);
  return range.toString();
};
