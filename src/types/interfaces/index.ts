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
  movieId: number,
  rating: number,
}

export interface RatingTabPropsType {
  ratedMovies: MoviesType[],
}

export interface SearchPanelPropsType {
  onSearch: (value: string) => any,
}
