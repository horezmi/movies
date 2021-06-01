export const setLocalStorage = (name: string, data: any) => {
  localStorage.setItem(name, data);
};

export const getLocalStorage = (name: string) => {
  const data: string | any = localStorage.getItem(name);
  return data;
};
