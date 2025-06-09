import { ArrowRight } from "lucide-react";
import { MovieCard } from "./MovieCard";
import { useEffect, useState } from "react";
import Link from "next/link";
// import { MovieCardLoading } from "./MovieCardLoading";

export const Upcoming = () => {
  const [upComing, setUpcoming] = useState([]);
  const [loading, setLoading] = useState(true);
  const getUpComing = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}movie/upcoming?language=en-US&page=1`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}  `,
          },
        }
      );
      const movies = await response.json();
      setUpcoming(movies.results);
      // console.log("upcoming", movies);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  useEffect(() => {
    getUpComing();
  }, []);

  return (
    <div>
      <div className="flex justify-between px-5 py-5 ">
        <h1 className="text-3xl font-bold bg-gradient-to-r  from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Upcoming Movies
        </h1>
        <Link href={`/category/upcoming`}>
          <button
            type="button"
            className="text-white bg-blue-700 flex items-center gap-3 cursor-pointer hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            See More <ArrowRight />
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-2 px-5 gap-5 md:grid-cols-4 sm:grid-cols-3  lg:grid-cols-5">
        {/* {loading &&
          upComing
            .slice(0, 10)
            .map((movie, index) => (
              <MovieCardLoading key={index} movie={movie} />
            ))} */}
        {!loading &&
          upComing
            .slice(0, 10)
            .map((movie, index) => <MovieCard key={index} movie={movie} />)}
      </div>
    </div>
  );
};
