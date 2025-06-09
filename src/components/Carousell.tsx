import * as React from "react";

import { MovieCarouselItem } from "./MovieCarouselItem";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { NowPlayingMovieType } from "@/Types";
// import Autoplay from "embla-carousel-autoplay";

export function CarouselDemo({
  nowPlayingMovie,
}: {
  nowPlayingMovie: NowPlayingMovieType[];
}) {
  return (
    <Carousel
      className="relative"
      //   plugins={[
      //     Autoplay({
      //       delay: 10000,
      //     }),
      //   ]}
    >
      <CarouselContent className="px-5">
        {nowPlayingMovie.slice(0, 5).map((movie, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <MovieCarouselItem movie={movie} movieId={movie.id} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="md:left-7 cursor-pointer  " />
      <CarouselNext className="md:right-7 cursor-pointer  " />
    </Carousel>
  );
}
