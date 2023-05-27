import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Movie } from "../entity/Movie";
import { TV } from "../entity/TvShows";
import noImage from "../assets/ImagePlaceholder/no-image-placeholder.png";

interface Props {
  item: Movie | TV;
}

const MediaCard = ({ item }: Props) => {
  const defaultImage = noImage;
  const posterPath = item.poster_path
    ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
    : defaultImage;

  let linkTo = "explore/tv/" + item.id;

  if (item.hasOwnProperty("title")) {
    // Assuming "title" is present only in the Movie interface
    linkTo = "/movies/" + item.id;
  }

  const title = "title" in item ? item.title : item.name; // Use "title" for Movie and "name" for TV

  return (
    <Link to={linkTo}>
      <Card>
        <Image src={posterPath} alt={title} fallbackSrc={defaultImage} />
        <CardBody>
          <Heading fontSize="2xl">{title}</Heading>
        </CardBody>
      </Card>
    </Link>
  );
};

export default MediaCard;
