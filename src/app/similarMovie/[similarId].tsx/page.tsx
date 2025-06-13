import { MovieCard } from "@/components/MovieCard";
import { MovieType } from "@/Types";
import { getSimilarMovies } from "@/utilities/getSimilarMovies";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const similarMovie = () => {
  const sameMovies = useParams();
  const [movie, setMovie] = useState<MovieType | null>(null);

  useEffect(() => {
    // if (!sameMovies?.similarId) return;
    const getMovie = async () => {
      const data = await getSimilarMovies(sameMovies?.similarId as string);
      setMovie(data);
    };

    getMovie();
  }, [sameMovies?.similarId]);

  return (
    <div>
      <div className="max-w-[1280px] w-full mx-auto  ">
        <div className="grid grid-cols-2 grid-rows-1 px-5 gap-5 md:grid-cols-5">
          {movie?.results?.map((movieSimiliar, index) => (
            <MovieCard key={index} movie={movieSimiliar} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default similarMovie;
