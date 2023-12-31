import { Box, Flex, Spinner, Text, useMediaQuery } from "@chakra-ui/react";
import { format, isValid } from "date-fns";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import useSimilarMedia from "../hooks/useSimilarMedia";
import MediaCard from "./MediaCard";
import MovieCardContainer from "./MovieCardContainer";
import { Movie } from "../entity/Movie";

interface Props {
  resourceType: "movie" | "tv";
}

const SimilarMediaCarousel = ({ resourceType }: Props) => {
  const { id } = useParams();
  const { data, isLoading, error } = useSimilarMedia<Movie>(
    id!,
    resourceType,
    "similar"
  );

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
  if (data?.results.length === 0) return <Text>No Result</Text>;

  return (
    <Slider {...sliderSettings}>
      {data?.results.map((similarMedia) => (
        <MovieCardContainer key={similarMedia.id}>
          <Box marginX={3} marginTop={5}>
            <MediaCard item={similarMedia} />
            <Flex marginY={3}>
              {isValid(new Date(similarMedia.release_date)) ? (
                <Text>
                  {format(new Date(similarMedia.release_date), "MMM d, yyyy")}
                </Text>
              ) : (
                <Text>Unknown Release Date</Text>
              )}
            </Flex>
          </Box>
        </MovieCardContainer>
      ))}
    </Slider>
  );
};

export default SimilarMediaCarousel;
