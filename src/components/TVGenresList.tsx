import useGenres from "../hooks/useGenres";
import {
  Button,
  HStack,
  Heading,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import tvGenres from "../Data/tvGenres";
import useTVQueryStore from "../tvStore";

const TVGenresList = () => {
  const { data, isLoading, error } = useGenres("genre/tv/list", tvGenres);
  const setSelectedGenreId = useTVQueryStore((s) => s.setGenreId);
  const getSelectedGenreId = useTVQueryStore((s) => s.tvQuery.genreId);

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

export default TVGenresList;
