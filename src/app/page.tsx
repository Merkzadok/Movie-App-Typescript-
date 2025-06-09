"use client";

// import { Footer } from "@/Components/Footer";
// import { CarouselLoading } from "@/Components/CarouselLoading";
// import { Header } from "@/Components/Header";
// import { Popular } from "@/Components/Popular";
// import { TopRated } from "@/Components/Toprated";
// import { Upcoming } from "@/Components/Upcoming";
import { CarouselDemo } from "@/components/Carousell";
import { NowPlayingMovieType } from "@/Types";
import { useEffect, useState } from "react";
export default function Home() {
  const [nowPlayingMovie, setNowPlayingMovie] = useState<NowPlayingMovieType[]>(
    []
  );
  const [loading, setLoading] = useState(false);
  const getNowPlayingMovie = async () => {
    setLoading(true);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}movie/now_playing?language=en-US&page=1`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}  `,
          },
        }
      );
      const movies = await response.json();
      setNowPlayingMovie(movies.results);
      // console.log("now Playing", movies);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  useEffect(() => {
    getNowPlayingMovie();
  }, []);

  return (
    <div className="flex justify-center flex-col overflow-hidden ">
      {/* <Header /> */}
      <div>
        {/* {loading && <CarouselLoading />} */}
        {!loading && <CarouselDemo nowPlayingMovie={nowPlayingMovie} />}
      </div>
      <div className="max-w-[1280px] w-full mx-auto">
        {/* <Upcoming /> */}
        {/* <Popular /> */}
        {/* <TopRated /> */}
      </div>
      <div className="max-w-[1280px] w-full mx-auto ">{/* <Footer /> */}</div>
    </div>
  );
}
