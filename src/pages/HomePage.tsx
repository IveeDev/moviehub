import { Box, Grid, Show, GridItem, Flex } from "@chakra-ui/react";
import GenreList from "../components/GenreList";
import MovieGrid from "../components/MovieGrid";
import MovieListSelector from "../components/MovieListSelector";
import SortSelector from "../components/SortSelector";

const HomePage = () => {
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
          <GenreList />
        </GridItem>
      </Show>

      <GridItem area="main">
        <Flex marginLeft={2}>
          <MovieListSelector />
          <Box marginLeft={3}>
            <SortSelector />
          </Box>
        </Flex>
        <MovieGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
