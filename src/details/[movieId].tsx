"use client";
import { MovieType } from "@/Types";
import { getCrewDetails } from "@/utilities/getCrewDetails";
import { getMovieById } from "@/utilities/getMovieById";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { InfoDetail } from "./InfoDetail";

export default function Details() {
  const router = useRouter();
  const movieId = router.query.movieId;
  const [movie, setMovie] = useState<MovieType>({} as number);
  const [crew, setCrew] = useState<MovieType>({} as MovieType);

  useEffect(() => {
    if (!movieId) return;
    const getMovie = async () => {
      const data = await getMovieById(movieId as number);
      setMovie(data);
    };

    getMovie();
  }, [movieId]);

  useEffect(() => {
    if (!movieId) return;
    const getCrew = async () => {
      const dataCrew = await getCrewDetails(movieId as number);
      setCrew(dataCrew);
    };

    getCrew();
  }, [movieId]);

  return (
    <div>
      <div className="max-w-[1280px] w-full mx-auto  ">
        <InfoDetail movie={movie} />
        {/* <PosterDetail movie={movie} />
        <OverviewDetail movie={movie} crew={crew} />
        <SimiliarDetail movie={movie} /> */}
      </div>
    </div>
  );
}
