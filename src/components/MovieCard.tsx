import { MovieType } from "@/Types";
import { Star } from "lucide-react";
import Link from "next/link";

export const MovieCard = ({ movie }: { movie: MovieType }) => {
  console.log("MovieCard", movie);
  return (
    <div className="cursor-pointer hover:scale-105">
      <Link href={`/details/${movie?.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
          className="w-full h-[233px] md:h-[340px] object-cover "
        />
      </Link>
      <div className="bg-[#F4F4F5] rounded-b-lg max-h-[50px] h-full overflow-hidden">
        <div className="flex items-center pl-2 ">
          <Star className="text-amber-300 fill-amber-300 " />
          <div className="flex">
            <p className="font-bold dark:text-gray-600 ">
              {movie?.vote_average?.toFixed(1)}/
            </p>
            <p className="text-gray-400">10</p>
          </div>
        </div>
        <p className="pl-2 dark:text-gray-600 ">{movie?.title}</p>
      </div>
    </div>
  );
};
