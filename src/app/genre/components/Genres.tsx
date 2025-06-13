"use client";

import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getGenre } from "@/utilities/GetGenre";

type Genre = {
  id: string;
  name: string;
};

export const GenresDemo = ({ genreId }: { genreId: string | null }) => {
  const [genres, setGenres] = useState<Genre[]>([]);
  useEffect(() => {
    const getGenres = async () => {
      const data = await getGenre();

      setGenres(data);
    };
    getGenres();
  }, []);

  return (
    <div className="max-w-[600px] w-screen">
      <div className="pt-5 flex gap-3 flex-wrap ">
        {genres?.map((genre) => (
          <Link key={genre.id} href={`/genre?genreId=${genre.id}`}>
            <Button
              className="cursor-pointer w-35"
              variant={genreId === String(genre.id) ? "default" : "outline"}
              key={genre.id}
            >
              {genre.name}
              <ChevronRight />
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
};
