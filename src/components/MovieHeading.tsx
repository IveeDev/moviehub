// import React from "react";
// import useMovieQueryStore from "../store";
// import useGenres from "../hooks/useGenres";
// import { Heading } from "@chakra-ui/react";
// import genres from "../Data/genres";

// const MovieHeading = () => {
//   const genreId = useMovieQueryStore((s) => s.movieQuery.genreId);
//   const { data: movieGenres } = useGenres("genre/movie/list", genres);
//   const getGenreId = movieGenres?.results.find((g) => g.id === genreId);

//   const heading = `${getGenreId?.name || ""} Movies`;
//   return (
//     <Heading as="h1" marginY={5} fontSize="5xl">
//       {heading}
//     </Heading>
//   );
// };

// export default MovieHeading;

import useMovieQueryStore from "../store";
import useGenres from "../hooks/useGenres";
import { Heading } from "@chakra-ui/react";
import genres from "../Data/genres";
import { useLocation } from "react-router-dom";
import useTVQueryStore from "../tvStore";
import tvGenres from "../Data/tvGenres";

const MovieHeading = () => {
  const location = useLocation();
  const currentPathname = location.pathname;
  console.log(location);
  const isMovieRoute = currentPathname === "/";
  const isTVRoute = currentPathname === "/explore/tv";

  const movieGenreId = useMovieQueryStore((s) => s.movieQuery.genreId);
  const tvGenreId = useTVQueryStore((s) => s.tvQuery.genreId);

  const { data: movieGenresData } = useGenres("genre/movie/list", genres);
  const { data: tvGenresData } = useGenres("genre/tv/list", tvGenres);

  const getMovieGenreId = movieGenresData?.results.find(
    (g) => g.id === movieGenreId
  );

  const getTVGenreId = tvGenresData?.results.find((g) => g.id === tvGenreId);

  let heading = "";

  if (isMovieRoute) {
    heading = `${getMovieGenreId?.name || ""} Movies`;
  } else if (isTVRoute) {
    heading = `${getTVGenreId?.name || ""} TV Shows`;
  }

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default MovieHeading;
