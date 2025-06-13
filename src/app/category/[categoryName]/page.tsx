"use client";
import { MovieCard } from "@/components/MovieCard";
import { cat } from "@/Types";
import { getCategoryName } from "@/utilities/getCategoryName";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const Page = () => {
  const categoryName = useParams();
  const [cat, setCat] = useState<cat | null>(null);

  useEffect(() => {
    //
    const getCat = async () => {
      const data = await getCategoryName(categoryName?.categoryName as string);
      setCat(data);
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
