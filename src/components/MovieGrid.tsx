import React from "react";
import useMovies from "../hooks/useMovies";
import { SimpleGrid, Spinner } from "@chakra-ui/react";
import MovieCard from "./MovieCard";

const MovieGrid = () => {
  const { data, isLoading, error } = useMovies();
  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        spacing={6}
      >
        {data?.results.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default MovieGrid;
