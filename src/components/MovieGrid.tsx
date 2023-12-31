import { Box, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import InfiniteScroll from "react-infinite-scroll-component";
import useMovies from "../hooks/useMovies";
import MediaCard from "./MediaCard";

import React from "react";
import MovieCardContainer from "./MovieCardContainer";
import MovieCardSkeleton from "./MovieCardSkeleton";

const MovieGrid = () => {
  const {
    data,
    isLoading,
    error,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useMovies();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  const fetchedMoviesCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;
  const isSearchCompleted = data?.pages.length === fetchedMoviesCount;
  const isEmpty = fetchedMoviesCount === 0;

  return (
    <>
      {error && <Text>{error.message}</Text>}
      <Box marginX={3} marginY={3}>
        {!isLoading && isEmpty && <Text fontFamily="2xl">No result found</Text>}
      </Box>

      <InfiniteScroll
        dataLength={fetchedMoviesCount}
        hasMore={!!hasNextPage} // double exclamation convert undefined to boolean value
        next={() => fetchNextPage()}
        loader={<Spinner />}
      >
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
          padding="10px"
          spacing={6}
        >
          {isLoading &&
            skeletons.map((skeleton) => (
              <MovieCardContainer key={skeleton}>
                <MovieCardSkeleton />
              </MovieCardContainer>
            ))}
          {data?.pages.map((page, index) => (
            <React.Fragment key={index}>
              {page.results.map((movie) => (
                <MovieCardContainer key={movie.id}>
                  <MediaCard item={movie} />
                </MovieCardContainer>
              ))}
            </React.Fragment>
          ))}
        </SimpleGrid>
      </InfiniteScroll>
    </>
  );
};

export default MovieGrid;
