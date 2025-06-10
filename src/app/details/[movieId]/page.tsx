// "use client";
// import { getMovieById } from "@/utilities/getMovieById";
// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";
// import { InfoDetail } from "../components/InfoDetail";
// import { MovieType } from "@/Types";
// import { PosterDetail } from "../components/PosterDetail";

import { InfoDetail } from "../components/InfoDetail";
import { OverviewDetail } from "../components/OverviewDetail";
import { PosterDetail } from "../components/PosterDetail";

// export default function Details() {
//   const router = useRouter();
//   const movieId = router.query.movieId;
//   const [movie, setMovie] = useState<MovieType>({} as MovieType);
//   // const [crew, setCrew] = useState<MovieType>({} as MovieType);

//   useEffect(() => {
//     if (!movieId) return;
//     const getMovie = async () => {
//       const data = await getMovieById(movieId);
//       setMovie(data);
//     };

//     getMovie();
//   }, [movieId]);

// useEffect(() => {
//   if (!movieId) return;
//   const getCrew = async () => {
//     const dataCrew = await getCrewDetails(movieId);
//     setCrew(dataCrew);
//   };

//   getCrew();
// }, [movieId]);

//   return (
//     <div>
//       <div className="max-w-[1280px] w-full mx-auto  ">
//         <InfoDetail movie={movie} />
//         <PosterDetail movie={movie} />
//         {/* <OverviewDetail movie={movie} crew={crew} /> */}
//         {/* <SimiliarDetail movie={movie} /> */}
//       </div>
//     </div>
//   );
// }

const Page = async ({ params }: { params: Promise<{ movieId: string }> }) => {
  const { movieId } = await params;
  console.log(movieId);

  return (
    <div className="max-w-[1280px] mx-auto w-full">
      <InfoDetail movieId={movieId} />
      <PosterDetail movieId={movieId} />
      <OverviewDetail movieId={movieId} />
    </div>
  );
};
export default Page;
