import React from "react";
import useMovieQueryStore from "../store";
import useGenres from "../hooks/useGenres";
import { Heading } from "@chakra-ui/react";

const MovieHeading = () => {
  const genreId = useMovieQueryStore((s) => s.movieQuery.genreId);
  const { data: genres } = useGenres();
  const getGenreId = genres.results.find((g) => g.id === genreId);

  const heading = `${getGenreId?.name || ""} Movies`;
  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default MovieHeading;
