import {
  Box,
  Flex,
  HStack,
  Heading,
  Image,
  SimpleGrid,
  Spinner,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import noImage from "../assets/ImagePlaceholder/no-image-placeholder.webp";
import MediaStatus from "../components/MediaStatus";
import CircleRating from "../components/circleRating/CircleRating";
import { TV } from "../entity/TvShows";
import useResource from "../hooks/useResource";
import TopCastContainer from "../components/TopCastContainer";
import SimilarMediaCarousel from "../components/SimilarMediaCarousel";

const TVDetail = () => {
  const { id } = useParams();
  const { data: tv, isLoading, error } = useResource<TV>(id!, "tv");
  const defaultImage = noImage;
  const posterPath = tv?.poster_path
    ? `https://image.tmdb.org/t/p/w500${tv.poster_path}`
    : defaultImage;

  const [isSmScreen] = useMediaQuery("(max-width: 480px)");
  const [isMdScreen] = useMediaQuery("(max-width: 768px)");
  let gridColumns = { base: 1, md: 2 };

  if (isSmScreen) {
    gridColumns = { base: 1, md: 2 };
  }

  if (isLoading) return <Spinner />;
  if (error || !tv) throw error;

  return (
    <>
      <SimpleGrid
        columns={gridColumns}
        paddingX={{ base: 2, md: 5, xl: 10 }}
        spacing={{ md: 10 }}
      >
        <Box>
          <Image
            borderRadius={10}
            src={posterPath || defaultImage}
            width={{ base: "90%" }}
          />
        </Box>
        <Box>
          <Heading as={"h1"}>{tv.name}</Heading>
          <Text fontSize="xl" color="gray">
            {tv.first_air_date}
          </Text>
          <HStack marginY={2}>
            {tv.genres.map((genre) => (
              <Flex
                bgColor="red.400"
                paddingX={2}
                borderRadius={2}
                key={genre.id}
              >
                {genre.name}
              </Flex>
            ))}
          </HStack>
          <Flex marginY={8}>
            <CircleRating rating={tv.vote_average} />
          </Flex>
          <Box>
            <Heading as={"h2"} fontSize={"2xl"} marginY={2}>
              Overview
            </Heading>
            <Text>{tv.overview}</Text>
          </Box>
          <MediaStatus data={tv} />
        </Box>
      </SimpleGrid>
      <TopCastContainer resourceType="tv" />
      <Box marginY={4} paddingX={5}>
        <Text fontSize="2xl" marginLeft={3}>
          SIMILAR TV SHOWS
        </Text>
        <SimilarMediaCarousel resourceType="tv" />
      </Box>
    </>
  );
};

export default TVDetail;
