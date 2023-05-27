import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Movie } from "../entity/Movie";
import noImage from "../assets/ImagePlaceholder/no-image-placeholder.webp";
import { Link } from "react-router-dom";
import { TV } from "../entity/TvShows";

interface Props {
  tv: TV;
}

const TVCard = ({ tv }: Props) => {
  const defaultImage = noImage;
  const posterPath = tv.poster_path
    ? `https://image.tmdb.org/t/p/w500${tv.poster_path}`
    : defaultImage;
  return (
    <Link to={"/explore/tv/" + tv.id}>
      <Card>
        <Image src={posterPath} alt={tv.name} fallbackSrc={defaultImage} />
        <CardBody>
          <Heading fontSize="2xl">{tv.name}</Heading>
        </CardBody>
      </Card>
    </Link>
  );
};

export default TVCard;
