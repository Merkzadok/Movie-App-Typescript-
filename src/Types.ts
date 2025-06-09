export type NowPlayingMovieType = {
  id: number;
  title: string;
  overview: string;
  vote_average: number;
  backdrop_path: string;
};
export type MovieType = {
  id: number;
  title: string;
  overview: string;
  vote_average: number;
  backdrop_path: string;
  poster_path: string;
  release_date: string;
  runtime: number;
  vote_count: number;
};
export type cat = {
  page: number;
  results: MovieType[];
  total_pages: number;
  total_results: number;
};
