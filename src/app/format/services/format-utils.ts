export const documentExecWithParam = (commandId: string, commandParam: string = '') => {
  return document.execCommand(commandId, false, commandParam);
};

export const getSelectionString = (selection: Selection) => {
  if (selection.rangeCount === 0) {
    return '';
  }

  const range = selection.getRangeAt(0);
  return range.toString();
};
