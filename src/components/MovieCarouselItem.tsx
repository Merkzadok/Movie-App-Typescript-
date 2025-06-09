import { MovieType } from "@/Types";
import { Star } from "lucide-react";
import Link from "next/link";
// import { MovieTrailer } from "./MovieTrailer";

export const MovieCarouselItem = ({ movie }: { movie: MovieType }) => {
  return (
    <div className="md:relative">
      <Link href={`/details/${movie.id}`}>
        <img
          src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_SERVICE_URL}${movie.backdrop_path}`}
          alt="movie"
          className="w-screen h-[246px] md:h-[640px] object-cover"
        />
      </Link>
      <div className="md:absolute top-15 left-5 md:flex md:flex-col   ">
        <div className="flex justify-between md:flex-col ">
          <div className="flex flex-col">
            <p className="md:text-white">Now Playing:</p>
            <p className="font-bold md:text-white ">{movie.title}</p>
          </div>
          <div className="flex items-center  ">
            <Star className="h-5 text-amber-300 fill-amber-300 " />
            <p className="text-gray-900 md:text-white  ">
              {" "}
              {movie.vote_average.toFixed(1)} /
            </p>
            <p className="text-gray-300  ">10</p>
          </div>
        </div>
        <p className="text-[#09090B] pt-5 md:text-white md:max-w-2xl md:pb-4 ">
          {movie.overview}
        </p>
        {/* <button
          onClick={movieid}
          className="flex items-center  bg-black text-white h-[40px] w-[145px] pt-[8px] pb-[8px] pl-[11px] pr-[16px] rounded-2xl md:bg-white md:text-black md:cursor-pointer md:hover:bg-cyan-500 "
        >
          {" "}
          <Play
            className="md:h-5
          "
          />
          Watch Trailer
        </button> */}
        <div>{/* <MovieTrailer movieId={movie?.id} /> */}</div>
      </div>
    </div>
  );
};
