import { Heading } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import genres from "../Data/genres";
import tvGenres from "../Data/tvGenres";
import useGenres from "../hooks/useGenres";
import useMovieQueryStore from "../store";
import useTVQueryStore from "../tvStore";

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
