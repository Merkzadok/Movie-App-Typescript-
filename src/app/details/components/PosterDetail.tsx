// import { MovieTrailer } from "../MovieTrailer";
"use client";
import { MovieType } from "@/Types";
import { getMovieById } from "@/utilities/getMovieById";
import { useEffect, useState } from "react";

export const PosterDetail = ({ movieId }: { movieId: string }) => {
  const [movie, setMovie] = useState<MovieType>({} as MovieType);
  useEffect(() => {
    if (!movieId) return;
    const getMovie = async () => {
      const data = await getMovieById(movieId);
      setMovie(data);
    };

    getMovie();
  }, [movieId]);
  // console.log("movie", movie);
  return (
    <div>
      <div className="flex gap-5  ">
        <img
          src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_SERVICE_URL}${movie?.poster_path}`}
          alt="movie-photo"
          className="h-[428px] hidden md:block"
        />
        <div className="relative">
          <img
            src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_SERVICE_URL}${movie?.backdrop_path}`}
            className="w-screen h-[211px] object-fit md:h-[428px] md:w-screen"
          />
          <div className="absolute bottom-5 left-5"></div>
        </div>
      </div>
    </div>
  );
};
