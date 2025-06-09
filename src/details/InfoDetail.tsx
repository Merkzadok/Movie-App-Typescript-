import { MovieType } from "@/Types";
import { Star } from "lucide-react";

export const InfoDetail = ({ movie }: { movie: MovieType }) => {
  // console.log("Movie", movie);
  return (
    <div>
      <div className="flex justify-between px-5 max-w-[1280px] w-screen mx-auto ">
        <div>
          <h1 className="font-extrabold"> {movie?.title} </h1>
          <div className="flex gap-2">
            <p> {movie?.release_date} </p>
            <p>·</p>
            <p>PG</p>
            <p>·</p>
            <p>
              {" "}
              {Math.floor(movie?.runtime / 60)}h {movie?.runtime % 60}m{" "}
            </p>
          </div>
        </div>
        <div className="flex">
          <Star className="text-amber-300 fill-amber-300 " />
          <div className="flex flex-col">
            <div className="flex">
              <p> {movie?.vote_average?.toFixed(1)} </p>
              <p>/10</p>
            </div>
            <p> VoteCount: {movie?.vote_count} </p>
          </div>
        </div>
      </div>
    </div>
  );
};
