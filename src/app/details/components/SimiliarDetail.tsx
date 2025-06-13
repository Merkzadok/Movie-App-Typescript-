"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MovieCard } from "@/components/MovieCard";
import { MovieType } from "@/Types";
import { getMovieById } from "@/utilities/getMovieById";
// import { MovieCardLoading } from "../MovieCardLoading";

export const SimiliarDetail = ({ movieId }: { movieId: string | string[] }) => {
  const [similiar, setSimiliar] = useState([]);
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState<MovieType | null>(null);
  useEffect(() => {
    if (!movieId) return;
    const getMovie = async () => {
      const data = await getMovieById(movieId);
      setMovie(data);
    };

    getMovie();
  }, [movieId]);

  const getSimiliar = async (id: number) => {
    setLoading(true);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}movie/${id}/similar?language=en-US&page=1`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}  `,
          },
        }
      );
      const movies = await response.json();

      return movies;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!movie || !movie.id) return;
    const getSi = async () => {
      const data = await getSimiliar(movie.id);
      setSimiliar(data?.results || []);
      setLoading(false);
    };

    getSi();
  }, [movie]);

  return (
    <div>
      <div className="flex justify-between items-center mx-auto px-5 ">
        <h1 className="font-extrabold "> More Like this</h1>
        <Link href={`/similarMovie/${movie?.id ?? ""}`}>
          <button
            type="button"
            className="text-white bg-blue-700 flex items-center gap-3 cursor-pointer hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            See More <ArrowRight />
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-2 grid-rows-1 px-5 gap-5 md:grid-cols-5">
        {/* {loading &&
          similiar
            ?.slice(0, 5)
            .map((movieSimiliar, index) => (
              <MovieCardLoading key={index} movie={movieSimiliar} />
            ))} */}
        {!loading &&
          similiar
            ?.slice(0, 5)
            .map((movieSimiliar, index) => (
              <MovieCard key={index} movie={movieSimiliar} />
            ))}
      </div>
    </div>
  );
};
