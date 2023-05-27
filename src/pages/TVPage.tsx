import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import MediaHeading from "../components/MediaHeading";
import MovieListSelector from "../components/MovieListSelector";
import TVGenresList from "../components/TVGenresList";
import TVGrid from "../components/TVGrid";
import TVSortSelector from "../components/TVSortSelector";

const TVPage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`, // Smaller screen
        lg: `"aside main"`, // Larger Screen
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr", //aside takes 200px width while the other(Where we have our grid) expands
      }}
    >
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <TVGenresList />
        </GridItem>
      </Show>

      <GridItem area="main">
        <MediaHeading />
        <Flex marginLeft={2}>
          <MovieListSelector />
          <Box marginLeft={3}>
            <TVSortSelector />
          </Box>
        </Flex>
        <TVGrid />
      </GridItem>
    </Grid>
  );
};

export default TVPage;
