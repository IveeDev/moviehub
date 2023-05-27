import { Box, Text } from "@chakra-ui/react";
import CastCarousel from "./CastCarousel";

interface Props {
  resourceType: "movie" | "tv";
}

const TopCastContainer = ({ resourceType }: Props) => {
  return (
    <Box marginTop={10} paddingX={5}>
      <Text fontSize="2xl" marginX={3}>
        TOP CAST
      </Text>
      <CastCarousel resourceType={resourceType} />
    </Box>
  );
};

export default TopCastContainer;
