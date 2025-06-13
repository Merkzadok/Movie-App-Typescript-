"use client";
import { Button } from "@/components/ui/button";
import { MovieType } from "@/Types";
import { getCrewDetails } from "@/utilities/getCrewDetails";
import { getMovieById } from "@/utilities/getMovieById";
import Link from "next/link";
import { useEffect, useState } from "react";

export const OverviewDetail = ({ movieId }: { movieId: string }) => {
  const [crew, setCrew] = useState<MovieType>({} as MovieType);
  // const [crew, setCrew] = useState<string>({});

  useEffect(() => {
    if (!movieId) return;
    const getCrew = async () => {
      const dataCrew = await getCrewDetails(movieId);
      setCrew(dataCrew);
    };

    getCrew();
  }, [movieId]);
  const [movie, setMovie] = useState<MovieType>({} as MovieType);
  useEffect(() => {
    if (!movieId) return;
    const getMovie = async () => {
      const data = await getMovieById(movieId);
      setMovie(data);
    };

    getMovie();
  }, [movieId]);

  const directorList = crew?.crew?.filter(
    (person) => person.department === "Directing"
  );
  const writerList = crew?.crew?.filter(
    (person) => person.department === "Writing"
  );

  return (
    <div>
      <div className="flex justify-between p-5 md:p-0 md:py-5 gap-10 md:gap-0 max-w-[1280px] w-screen mx-auto ">
        <div className="flex flex-col w-full  ">
          <div className="pb-10 md:flex gap-5 ">
            {" "}
            {movie?.genres?.map((genre) => (
              <Link key={genre.id} href={`/genre?genreId=${genre.id}`}>
                <Button
                  className="cursor-pointer"
                  key={genre.id}
                  variant="outline"
                >
                  {genre.name}
                </Button>
              </Link>
            ))}
          </div>
          <div>
            <p>{movie?.overview}</p>
          </div>
        </div>
      </div>

      <div className="flex gap-10 ml-5 py-10   ">
        <h1 className="font-extrabold "> Directors </h1>
        {directorList?.slice(0, 3).map((director, index) => (
          <p key={index}>{director.name} </p>
        ))}
      </div>
      <div className="flex gap-10 ml-5 pb-10  ">
        <h1 className="font-extrabold "> Writers </h1>
        {writerList?.slice(0, 3).map((writer, index) => (
          <p key={index}>{writer.name} </p>
        ))}
      </div>
      <div className="flex gap-10 ml-5 pb-10  ">
        <h1 className="font-extrabold  "> Stars </h1>
        {crew?.cast?.slice(0, 3).map((actor, index) => (
          <p key={index}>{actor.name} </p>
        ))}
      </div>
    </div>
  );
};
