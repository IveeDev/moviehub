import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Movie } from "../entity/Movie";
// import getCroppedImageUrl from "../services/image-url";

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  return (
    <Card>
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
