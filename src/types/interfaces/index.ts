export interface MoviesType {
  title: string;
  poster_path: string;
  overview: string;
  release_date: string;
  vote_average: number;
}

export interface GenresType {
  id: number;
  name: string;
}

export interface RatedFilmType {
  movieId: number,
  rating: number,
}
