import { Box, Grid, Show, GridItem, Flex } from "@chakra-ui/react";

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
        <GridItem area="aside">
          Sidebar
        </GridItem>
      </Show>

      <GridItem area="main">
        Main
      </GridItem>
    </Grid>
  );
};

export default HomePage;
