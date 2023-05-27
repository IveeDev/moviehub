import {
  Box,
  Flex,
  Image,
  Spinner,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import avatar from "../assets/avatar.png";
import useCast from "../hooks/useCast";

interface Props {
  resourceType: "movie" | "tv";
}

const CastCarousel = ({ resourceType }: Props) => {
  const { id } = useParams();
  const { data: castData, isLoading, error } = useCast(id!, resourceType);
  const [isSmScreen] = useMediaQuery("(max-width: 480px)");
  const [isMdScreen] = useMediaQuery("(max-width: 768px)");
  const [isLgScreen] = useMediaQuery("(max-width: 1024px)");

  let slidesToShow = 5;

  if (isLgScreen) {
    slidesToShow = 3;
  }

  if (isMdScreen) {
    slidesToShow = 2;
  }

  if (isSmScreen) {
    slidesToShow = 1;
  }

  const sliderSettings = {
    slidesToShow,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
  };

  if (isLoading) return <Spinner />;
  if (error) return null;

  // Access the cast list and perform further operations
  return (
    <Slider {...sliderSettings}>
      {castData?.cast.map((cast) => (
        <Box key={cast.id} p={2}>
          <Box
            width="200px"
            height="200px"
            borderRadius="full"
            overflow="hidden"
            margin="auto"
          >
            <Image
              src={
                cast.profile_path
                  ? `https://image.tmdb.org/t/p/w200${cast.profile_path}`
                  : avatar
              }
              alt={cast.name}
              objectFit="cover"
              width="100%"
            />
          </Box>
          <Flex flexDirection="column" textAlign="center" marginY={3}>
            <Text fontWeight="bold">{cast.name}</Text>
            <Text>{cast.character}</Text>
          </Flex>
        </Box>
      ))}
    </Slider>
  );
};

export default CastCarousel;
