import {
  Box,
  Flex,
  Image,
  Spinner,
  Text,
  useMediaQuery,
  SimpleGrid,
  Card,
  CardBody,
} from "@chakra-ui/react";
import { format } from "date-fns";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import noImage from "../assets/ImagePlaceholder/no-image-placeholder.webp";
import { Link, useParams } from "react-router-dom";
import useSimilarMovie from "../hooks/useSimilarMovie";
import MovieCardContainer from "./MovieCardContainer";
import MovieCard from "./MovieCard";

const SimilarMovieCarousel = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useSimilarMovie(id!);

  const [isSmScreen] = useMediaQuery("(max-width: 480px)");
  const [isMdScreen] = useMediaQuery("(max-width: 768px)");
  const [isLgScreen] = useMediaQuery("(max-width: 1024px)");

  let slidesToShow = 4;

  if (isLgScreen) {
    slidesToShow = 4;
  }

  if (isMdScreen) {
    slidesToShow = 3;
  }

  if (isSmScreen) {
    slidesToShow = 2;
  }

  const sliderSettings = {
    slidesToShow,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
  };

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <Slider {...sliderSettings}>
      {data?.results.map((similarMovie) => (
        <MovieCardContainer key={similarMovie.id}>
          <Box marginX={3}>
            <MovieCard movie={similarMovie} />
            <Flex marginY={3}>
              <Text>
                {format(new Date(similarMovie.release_date), "MMM d, yyyy")}
              </Text>
            </Flex>
          </Box>
        </MovieCardContainer>
      ))}
    </Slider>
  );
};

export default SimilarMovieCarousel;
