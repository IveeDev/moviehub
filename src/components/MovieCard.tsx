import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Movie } from "../entity/Movie";
// import getCroppedImageUrl from "../services/image-url";

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  return (
    <Card
      overflow="hidden"
      _hover={{
        transform: "scale(1.03)",
        transition: "transform .15 ease-in",
      }}
      borderRadius={10}
    >
      <Image
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <CardBody>
        <Heading fontSize="2xl">{movie.title}</Heading>
      </CardBody>
    </Card>
  );
};

export default MovieCard;
