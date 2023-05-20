import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Genre } from "../entity/Genre";

const apiClient = new APIClient<Genre>("/genre/movie/list");

const useMovies = () => {
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    // staleTime: 1000,
  });
};

export default useMovies;
