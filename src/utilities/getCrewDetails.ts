export const getCrewDetails = async (crewId: number) => {
  // console.log("crewDetails", getCrewDetails);
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}movie/${crewId}/credits?language=en-US`,
      {
        // /movie/${movieId}?language=en-US
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
