import { Box, Grid, Show, GridItem, Flex } from "@chakra-ui/react";
import GenreList from "../components/GenreList";
import MovieGrid from "../components/MovieGrid";
import MovieListSelector from "../components/MovieListSelector";
import SortSelector from "../components/SortSelector";
import MovieHeading from "../components/MovieHeading";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"aside main"`, // Smaller screen
        lg: `"aside main"`, // Larger Screen
      }}
      templateColumns={{
        base: "150px 1fr",
        lg: "150px 1fr", //aside takes 200px width while the other(Where we have our grid) expands
      }}
    >
      {/* <Show> */}
      <GridItem area="aside" paddingX={3}>
        <GenreList />
      </GridItem>
      {/* </Show> */}

      <GridItem area="main">
        <MovieHeading />
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
