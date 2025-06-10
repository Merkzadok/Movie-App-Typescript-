export type NowPlayingMovieType = {
  id: number;
  title: string;
  overview: string;
  vote_average: number;
  backdrop_path: string;
};

export type Crew = {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  credit_id: string;
  department: string;
  job: string;
};
export type Cast = {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
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
  movieId: number;
  crew: Crew[];
  directorList: [""];
  writer: [""];
  cast: Cast[];
  Genre: Genre[];
  genres: Genre[];
};
export type cat = {
  page: number;
  results: MovieType[];
  total_pages: number;
  total_results: number;
};
export type Genre = {
  id: number;
  name: string;
};
