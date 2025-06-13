import { MovieCard } from "@/components/MovieCard";
import { MovieType } from "@/Types";

export const GenresMovies = ({
  genreId,
  page,
  movies,
}: {
  genreId: string | null;
  page: number;
  movies: MovieType[];
}) => {
  return (
    <div>
      {/* <div className="grid grid-cols-2 px-5 gap-5 md:grid-cols-4 sm:grid-cols-3 lg:grid-cols-5   ">
        {movies.map((movie) => {
          return <MovieCard movie={movie} />;
        })}
      </div> */}
      <div>
        <div className="grid grid-cols-2 px-5 gap-5 md:grid-cols-4 sm:grid-cols-3 lg:grid-cols-5">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};
