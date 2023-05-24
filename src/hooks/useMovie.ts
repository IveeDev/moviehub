import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Movie } from "../entity/Movie";

const apiClient = new APIClient<Movie>("/movie");

const useMovie = (id: string) =>
  useQuery({
    queryKey: ["movies", id],
    queryFn: () => apiClient.get(id),
  });

export default useMovie;
