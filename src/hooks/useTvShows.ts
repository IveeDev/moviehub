import { useInfiniteQuery } from "@tanstack/react-query";
import { Movie } from "../entity/Movie";
import APIClient, { FetchResponse } from "../services/api-client";
import ms from "ms";
import { TV } from "../entity/TvShows";
import useTVQueryStore from "../tvStore";

const apiClient = new APIClient<TV>("/discover/tv");
const apiClientSearch = new APIClient<TV>("/search/tv");

const useTvShows = () => {
  const tvQuery = useTVQueryStore((s) => s.tvQuery);

  const fetchMovies = async ({ pageParam = 1 }) => {
    if (tvQuery.searchText) {
      // Use the search endpoint if a search query is present
      return apiClientSearch.getAll({
        params: {
          // query: movieQuery.searchText,
          page: pageParam,
        },
      });
    } else {
      // Use the discovery endpoint to fetch all movies
      return apiClient.getAll({
        params: {
          with_genres: tvQuery.genreId,
          page: pageParam,
          sort_by: tvQuery.sortOrder,
        },
      });
    }
  };

  return useInfiniteQuery<FetchResponse<TV>, Error>({
    queryKey: ["tv", tvQuery],
    queryFn: fetchMovies,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.page ? allPages.length + 1 : undefined;
    },
    staleTime: ms("24h"),
  });
};

// export default useMovies;

export default useTvShows;
