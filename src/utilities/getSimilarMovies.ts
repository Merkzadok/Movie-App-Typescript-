export const getSimilarMovies = async (similarId: string | string[]) => {
  // console.log( "movieID", movieId);
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}movie/${similarId}/similar?language=en-US&page=1`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
        },
      }
    );
    const movies = await response.json();
    return movies;
  } catch (error) {
    console.log(error);
  }
};
