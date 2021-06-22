export interface MoviesType {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  release_date: string;
  vote_average: number;
  rating?: number;
}

export interface GenresType {
  id: number;
  name: string;
}

export interface RatedFilmType {
  movieId: number;
  rating: number;
}

export interface RatingTabPropsType {
  ratedMovies: MoviesType[];
}

export interface SearchPanelPropsType {
  onSearch: (value: string) => any;
}

export interface CardListPropsType {
  movies: MoviesType[];
  onChangeStar: (movieId: number, rating: number) => any;
}

export interface CardPropsType {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  release_date: string;
  vote_average: number;
  rating?: number;
  onChangeStar: (movieId: number, rating: number) => any;
  genre_ids?: any;
  className: string;
}

export interface PaginationPropsType {
  onChange: (pageNumber: number) => any;
  totalPages: number;
  currentPage: number;
}
