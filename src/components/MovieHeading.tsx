import React from "react";
import { Movie } from "../entity/Movie";
import useMovieQueryStore from "../store";
import { Heading } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

const MovieHeading = () => {
  const genreId = useMovieQueryStore((s) => s.movieQuery.genreId);
  const { data: genres } = useGenres();
  const genre = genres.results.find((g) => g.id === genreId);

  const heading = `${genre?.name || ""} Movies`;
  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default MovieHeading;
