const debounce = (func: Function, ms: number): Function => {
  let timerID: any;

  return (...args: Array<any>) => {
    clearTimeout(timerID);
    timerID = setTimeout(() => {
      timerID = null;
      func(...args);
    }, ms);
  };
};

export default debounce;
