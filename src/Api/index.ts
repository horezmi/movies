import { getLocalStorage } from 'helpers/Functions/LocalStorage';
import { RatedFilmType } from 'types/interfaces';

const BASE_URL: string = 'https://api.themoviedb.org/3/';
const API_KEY: string = 'c44b5b2b9ec7f5830a7641106c455833';
const sessionId: string = getLocalStorage('sessionId');

const fetchData = async (url: string, value: object = {}) => {
  if (!value) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        return false;
      }
      const data = await response.json();
      return data;
    } catch (e) {
      return false;
    }
  } else {
    try {
      const response = await fetch(url, value);
      if (!response.ok) {
        return false;
      }
      const data = await response.json();
      return data;
    } catch (e) {
      return false;
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

const postRatedFilm = async ({ movieId, rating }: RatedFilmType) => {
  const data = await fetchData(`${BASE_URL}movie/${movieId}/rating?api_key=${API_KEY}&guest_session_id=${sessionId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ value: rating }),
  });
  return data;
};

const getRatedFilms = async () => {
  const data = await fetchData(`${BASE_URL}guest_session/${sessionId}/rated/movies?api_key=${API_KEY}`);
  return data;
};

const getGenres = async () => {
  const data = await fetchData(`${BASE_URL}genre/movie/list?api_key=${API_KEY}`);
  return data;
};

export { fetchData, getSearchedMovies, createGuestSession, postRatedFilm, getRatedFilms, getGenres, BASE_URL, API_KEY };
