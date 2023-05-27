import { useParams } from "react-router-dom";
import useMovie from "../hooks/useMovie";
import {
  Box,
  Divider,
  Flex,
  HStack,
  Heading,
  Image,
  SimpleGrid,
  Spinner,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import noImage from "../assets/ImagePlaceholder/no-image-placeholder.webp";
import MovieStatus from "../components/MediaStatus";
import CastCarousel from "../components/CastCarousel";
import SimilarMovieCarousel from "../components/SimilarMovieCarousel";
import useResource from "../hooks/useResource";
import { Movie } from "../entity/Movie";
import CircleRating from "../components/circleRating/CircleRating";
import MediaStatus from "../components/MediaStatus";

const MovieDetail = () => {
  const { id } = useParams();
  const { data: movie, isLoading, error } = useResource<Movie>(id!, "movie");
  const defaultImage = noImage;
  const posterPath = movie?.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : defaultImage;

  const [isSmScreen] = useMediaQuery("(max-width: 480px)");
  const [isMdScreen] = useMediaQuery("(max-width: 768px)");

  let gridColumns = { base: 1, md: 2 };

  if (isSmScreen) {
    gridColumns = { base: 1, md: 2 };
  }

  if (isLoading) return <Spinner />;
  if (error || !movie) throw error;

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
            width={{ base: "100%" }}
          />
        </Box>
        <Box marginY={{ base: 5 }}>
          <Heading as="h1">{movie.title}</Heading>
          <Text fontSize="xl" color="gray">
            {movie.tagline}
          </Text>
          <HStack marginY={2}>
            {movie.genres.map((genre) => (
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
            <CircleRating rating={movie.vote_average} />
          </Flex>
          <Box>
            <Heading as={"h2"} fontSize={"4xl"} marginY={2}>
              Overview
            </Heading>
            <Text fontSize="md">{movie.overview}</Text>
          </Box>

          {/* <MovieStatus movie={movie} /> */}
          <MediaStatus data={movie} />
        </Box>
      </SimpleGrid>

      <Box marginY={4} paddingX={5}>
        <Text fontSize="2xl">TOP CASTS:</Text>
        <CastCarousel />
      </Box>
      <Box marginY={4} paddingX={5}>
        <Text>SIMILAR MOVIES:</Text>
        <SimilarMovieCarousel />
      </Box>
    </>
  );
};

export default MovieDetail;
