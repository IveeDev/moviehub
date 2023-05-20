import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { Movie } from "../entity/Movie";
import APIClient, { FetchResponse } from "../services/api-client";
import ms from "ms";

const apiClient = new APIClient<Movie>("/movie/popular");

const useMovies = () => {
  return useInfiniteQuery<FetchResponse<Movie>, Error>({
    queryKey: ["popularMovies"],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.page ? allPages.length + 1 : undefined;
    },
    staleTime: ms("24h"),
  });
};

export default useMovies;
