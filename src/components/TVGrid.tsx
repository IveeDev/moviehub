import { Box, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import InfiniteScroll from "react-infinite-scroll-component";
import MediaCard from "./MediaCard";

import React, { useState } from "react";
import MovieCardContainer from "./MovieCardContainer";
import MovieCardSkeleton from "./MovieCardSkeleton";
import useTvShows from "../hooks/useTvShows";
import TVCard from "./TVCard";

const TVGrid = () => {
  const {
    data,
    isLoading,
    error,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useTvShows();
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
              {page.results.map((tv) => (
                <MovieCardContainer key={tv.id}>
                  {/* <TVCard tv={tv} /> */}
                  <MediaCard item={tv} />
                </MovieCardContainer>
              ))}
            </React.Fragment>
          ))}
        </SimpleGrid>
      </InfiniteScroll>
    </>
  );
};

export default TVGrid;
