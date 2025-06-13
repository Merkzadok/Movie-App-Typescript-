"use client";
import { parseAsInteger, useQueryState } from "nuqs";
import { useEffect, useState } from "react";
import { GenresDemo } from "./components/Genres";
import { getGenreMovies } from "@/utilities/getGenreMovies";
import { useSearchParams } from "next/navigation";
import { GenresMovies } from "./components/GenreMovies";
import { MovieType } from "@/Types";
import { PaginationDemo } from "./components/PageBottom";

export default function Home() {
  const searchParams = useSearchParams();
  const genreId = searchParams.get("genreId");
  const [page, setPage] = useQueryState<number>(
    "page",
    parseAsInteger.withDefault(1)
  );
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [totalCount, setTotalCount] = useState<number>(1);

  useEffect(() => {
    if (!genreId) return;
    const getGenres = async () => {
      const response = await getGenreMovies(genreId, page);

      setMovies(response?.results);
      setTotalCount(response.total_pages);
    };
    getGenres();
  }, [genreId, page]);

  const totalPages = 5;
  return (
    <div className=" w-full mx-auto flex flex-col items-center ">
      <div className=" mb-10 sm:flex sm:justify-center ">
        <GenresDemo genreId={genreId} />
        <GenresMovies genreId={genreId} page={page} movies={movies} />
      </div>
      <PaginationDemo
        page={page}
        setPage={setPage}
        totalPages={totalPages}
        totalCount={totalCount}
      />
    </div>
  );
}
