import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const MovieCardContainer = ({ children }: Props) => {
  return (
    <Box
      borderRadius={10}
      overflow="hidden"
      _hover={{
        transform: "scale(1.06)",
        transition: "transform .15 ease-in",
      }}
    >
      {children}
    </Box>
  );
};

export default MovieCardContainer;
