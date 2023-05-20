import { CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const MovieCardSkeleton = () => {
  return (
    <Skeleton height="200px">
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Skeleton>
  );
};

export default MovieCardSkeleton;
