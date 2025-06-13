import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import YouTube from "react-youtube";
import { getMovieTrailer } from "@/utilities/getMovieTrailer";
import { MovieTrailerType } from "@/Types";

export const MovieTrailer = ({ movieId }: { movieId: number }) => {
  const [trailer, setTrailer] = useState<MovieTrailerType[]>([]);
  useEffect(() => {
    const getMovieTrailerById = async () => {
      if (!movieId) return;
      try {
        const data = await getMovieTrailer(movieId);
        setTrailer(data.results);
      } catch (error) {
        console.error("Failed to fetch movie trailer:", error);
      }
    };
    getMovieTrailerById();
  }, [movieId]);
  const movieTrailer = trailer?.find(
    (video) => video.name === "Official Trailer"
  );
  // console.log(movieTrailer);
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="flex items-center  bg-black text-white h-[40px] w-[145px] pt-[8px] pb-[8px] pl-[11px] pr-[16px] rounded-2xl md:bg-white md:text-black md:cursor-pointer md:hover:bg-cyan-500 ">
            Watch Trailer
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-fit">
          <DialogTitle />
          <DialogDescription />

          <YouTube
            videoId={movieTrailer?.key}
            opts={{
              height: "561",
              widtch: "997",
              // playerVars: {
              //   autoplay: 1,
              // },
            }}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};
