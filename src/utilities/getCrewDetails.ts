export const getCrewDetails = async (crewId: string) => {
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
    return movies;
  } catch (error) {
    console.log(error);
  }
};
