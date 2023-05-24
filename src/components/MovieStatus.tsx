import React from "react";
import { Movie } from "../entity/Movie";
import { Box, Flex, Divider, Text, Heading, Image } from "@chakra-ui/react";
import noImage from "../assets/ImagePlaceholder/no-image-placeholder.webp";

interface Props {
  movie: Movie;
}

const formatRunTime = (runtime: number) => {
  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;

  return `${hours}h ${minutes}m`;
};

const MovieStatus = ({ movie }: Props) => {
  const formattedRuntime = formatRunTime(movie.runtime);
  const defaultImage = noImage;

  return (
    <>
      <Box marginY={5}>
        <Flex gap={3} flexDir={{ base: "column", md: "row" }}>
          <Box display="flex" gap={3}>
            <Text fontWeight="bold">Status:</Text>
            <Text color="red.400">{movie.status}</Text>
          </Box>
          <Box display="flex" gap={3}>
            <Text fontWeight="bold">Release Date:</Text>
            <Text color="red.400">{movie.release_date}</Text>
          </Box>
          <Box display="flex" gap={3}>
            <Text fontWeight="bold">Runtime:</Text>
            <Text color="red.400">{formattedRuntime}</Text>
          </Box>
        </Flex>
        <Divider />
      </Box>

      <Box>
        <Flex
          justifyContent="space-between"
          alignItems="start"
          flexDir={{ base: "column", md: "row" }}
        >
          <Text fontSize="xl" fontWeight="bold">
            Production Companies:
          </Text>
          <Box marginX={3} marginY={2}>
            {movie.production_companies.map((prodComp) => (
              <Flex justifyContent="space-between" gap={7} key={prodComp.id}>
                <Text>{prodComp.name}</Text>
                <Image
                  src={`https://image.tmdb.org/t/p/w500${prodComp.logo_path}`}
                  fallbackSrc={defaultImage}
                  width="5rem"
                />
              </Flex>
            ))}
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default MovieStatus;
// #576374
