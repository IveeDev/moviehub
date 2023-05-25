import React from "react";
import useGenres from "../hooks/useGenres";
import {
  Button,
  HStack,
  Heading,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGameQueryStore from "../store";
import useMovieQueryStore from "../store";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  const setSelectedGenreId = useMovieQueryStore((s) => s.setGenreId);
  const getSelectedGenreId = useMovieQueryStore((s) => s.movieQuery.genreId);

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize={"2xl"} marginBottom={2}>
        Genres
      </Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Button
                whiteSpace="normal"
                fontSize="md"
                color={genre.id === getSelectedGenreId ? "blue.500" : "normal"}
                fontWeight={genre.id === getSelectedGenreId ? "bold" : "normal"}
                variant="link"
                onClick={() => setSelectedGenreId(genre.id)}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
