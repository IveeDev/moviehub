import { useInfiniteQuery } from "@tanstack/react-query";
import { Movie } from "../entity/Movie";
import APIClient, { FetchResponse } from "../services/api-client";
import ms from "ms";
import useMovieQueryStore from "../store";

const apiClient = new APIClient<Movie>("/discover/movie");
const apiClientSearch = new APIClient<Movie>("/search/movie");

const useMovies = () => {
  const movieQuery = useMovieQueryStore((s) => s.movieQuery);

  const fetchMovies = async ({ pageParam = 1 }) => {
    if (movieQuery.searchText) {
      // Use the search endpoint if a search query is present
      return apiClientSearch.getAll({
        params: {
          query: movieQuery.searchText,
          page: pageParam,
        },
      });
    } else {
      // Use the discovery endpoint to fetch all movies
      return apiClient.getAll({
        params: {
          with_genres: movieQuery.genreId,
          page: pageParam,
          sort_by: movieQuery.sortOrder,
        },
      });
    }
  };

  return useInfiniteQuery<FetchResponse<Movie>, Error>({
    queryKey: ["movies", movieQuery],
    queryFn: fetchMovies,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.page ? allPages.length + 1 : undefined;
    },
    staleTime: ms("24h"),
  });
};

// export default useMovies;

export default useMovies;

// import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
// import { Movie } from "../entity/Movie";
// import APIClient, { FetchResponse } from "../services/api-client";
// import ms from "ms";
// import useMovieQueryStore from "../store";

// const apiClient = new APIClient<Movie>("/discover/movie");

// const useMovies = () => {
//   const movieQuery = useMovieQueryStore((s) => s.movieQuery);

//   return useInfiniteQuery<FetchResponse<Movie>, Error>({
//     queryKey: ["movies", movieQuery],
//     queryFn: ({ pageParam = 1 }) =>
//       apiClient.getAll({
//         params: {
//           with_genres: movieQuery.genreId,
//           page: pageParam,
//           sort_by: movieQuery.sortOrder,
//         },
//       }),
//     getNextPageParam: (lastPage, allPages) => {
//       return lastPage.page ? allPages.length + 1 : undefined;
//     },
//     staleTime: ms("24h"),
//   });
// };
