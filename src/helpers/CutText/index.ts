const cutText = (text: string) => {
  if (text.length > 550) {
    const cated = text.substring(0, 550);
    const idx = cated.lastIndexOf('.');
    const result = text.substring(0, idx + 1);
    return result;
  }
  return text;
};

export default cutText;
