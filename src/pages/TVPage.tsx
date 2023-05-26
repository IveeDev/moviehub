import { Box, Grid, Show, GridItem, Flex } from "@chakra-ui/react";
import GenreList from "../components/GenreList";
import MovieGrid from "../components/MovieGrid";
import MovieListSelector from "../components/MovieListSelector";
import SortSelector from "../components/SortSelector";
import MovieHeading from "../components/MovieHeading";
import TVGrid from "../components/TVGrid";
import TVGenresList from "../components/TVGenresList";
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
        {/* <MovieHeading /> */}
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
