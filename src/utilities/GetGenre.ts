export const getGenre = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}genre/movie/list?language=en`,
      {
        method: "GET",
        headers: {
          accept: "appliaction/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
        },
      }
    );
    const data = await response.json();
    return data?.genres;
  } catch (error) {
    console.log(error);
  }
};
