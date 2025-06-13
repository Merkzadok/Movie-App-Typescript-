export const getGenreMovies = async (genreIds: string, page = 1) => {
  console.log("GENREIDS", genreIds);
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}discover/movie?language=en&with_genres=${genreIds}&page=${page}`,
      {
        method: "GET",
        headers: {
          accept: "appliaction/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
        },
      }
    );
    const movies = await response.json();
    console.log(movies);
    return movies;
  } catch (error) {
    console.log(error);
  }
};
