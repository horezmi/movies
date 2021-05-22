const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'c44b5b2b9ec7f5830a7641106c455833';

const fetchData = async (url: string) => {
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
};

const getSearchedMovies = async (searchValue: string, page: number) => {
  const data = await fetchData(`${BASE_URL}search/movie?api_key=${API_KEY}&query=${searchValue}&page=${page}`);
  return data;
};

export { fetchData, getSearchedMovies, BASE_URL, API_KEY };
