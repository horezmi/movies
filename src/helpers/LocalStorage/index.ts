export const getGuestSessionIdFromLS = () => {
  const sessionId: string | null = localStorage.getItem('sessionId');
  return sessionId;
};

export const setGuestSessionIdToLS = (sessionId: string) => {
  localStorage.setItem('sessionId', sessionId);
};
