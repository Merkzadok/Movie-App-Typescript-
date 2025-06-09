"use client";

import { MovieCard } from "@/components/MovieCard";
import { cat } from "@/Types";
// import { MovieCard } from "@/Components/MovieCard";
// import { getCategoryName } from "@/utilities/getCategoryName";
import { getCategoryName } from "@/utilities/getCategoryName";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
const Page = () => {
  const router = useRouter();
  const categoryName = router.query?.categoryName;
  // `/movie/${categoryName}?language=en-US&page=1`;
  const [cat, setCat] = useState<cat | null>(null);
  console.log("Cat", cat);
  useEffect(() => {
    // if (!movieId) return;
    const getCat = async () => {
      const dataCat = await getCategoryName(categoryName as string);
      setCat(dataCat);
    };

    getCat();
  }, []);
  return (
    <div>
      <div className="grid grid-cols-2 px-5 gap-5 md:grid-cols-4 sm:grid-cols-3  lg:grid-cols-5 max-w-[1280px] w-full mx-auto">
        {cat?.results?.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
      <div className="max-w-[1280px] w-full mx-auto "></div>
    </div>
  );
};
export default Page;
