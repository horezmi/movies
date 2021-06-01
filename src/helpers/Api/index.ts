const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'c44b5b2b9ec7f5830a7641106c455833';

const fetchData = async (url: string, value: object = {}) => {
  if (!value) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        return true;
      }
      const data = await response.json();
      return data;
    } catch (e) {
      return true;
    }
  } else {
    try {
      const response = await fetch(url, value);
      if (!response.ok) {
        return true;
      }
      const data = await response.json();
      return data;
    } catch (e) {
      return true;
    }
  }
};

const getSearchedMovies = async (searchValue: string, page: number) => {
  const data = await fetchData(`${BASE_URL}search/movie?api_key=${API_KEY}&query=${searchValue}&page=${page}`);
  return data;
};

const createGuestSession = async () => {
  const data = await fetchData(`${BASE_URL}authentication/guest_session/new?api_key=${API_KEY}`);
  return data;
};

const postRatedFilm = async () => {
  // https://api.themoviedb.org/3/movie/{movie_id}/rating?api_key=<<api_key>>
  const data = await fetchData(`${BASE_URL}/movie/10/rating?api_key=${API_KEY}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ value: 8.5 }),
  });
  console.log(data);
  return data;
};

export { fetchData, getSearchedMovies, createGuestSession, postRatedFilm, BASE_URL, API_KEY };
