import React from "react";
import useMovieQueryStore from "../store";
import useGenres from "../hooks/useGenres";
import { Heading } from "@chakra-ui/react";
import genres from "../Data/genres";

const MovieHeading = () => {
  const genreId = useMovieQueryStore((s) => s.movieQuery.genreId);
  const { data: movieGenres } = useGenres("genre/movie/list", genres);
  const getGenreId = movieGenres?.results.find((g) => g.id === genreId);

  const heading = `${getGenreId?.name || ""} Movies`;
  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default MovieHeading;
