import { useQuery } from "@tanstack/react-query";
import { Movie } from "../entity/Movie";
import APIClient from "../services/api-client";

const apiClient = new APIClient<Movie>("/movie/popular");

const useMovies = () =>
  useQuery({
    queryKey: ["popularMovies"],
    queryFn: apiClient.getAll,
  });

export default useMovies;
