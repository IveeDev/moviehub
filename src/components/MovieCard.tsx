import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Movie } from "../entity/Movie";
import noImage from "../assets/ImagePlaceholder/no-image-placeholder.webp";
import { Link } from "react-router-dom";

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  const defaultImage = noImage;
  const posterPath = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : defaultImage;
  return (
    <Link to={"/movies/" + movie.id}>
      <Card>
        <Image src={posterPath} alt={movie.title} fallbackSrc={defaultImage} />
        <CardBody>
          <Heading fontSize="2xl">{movie.title}</Heading>
        </CardBody>
      </Card>
    </Link>
  );
};

export default MovieCard;
