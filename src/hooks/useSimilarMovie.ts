import { useQuery } from "@tanstack/react-query";
import { Movie } from "../entity/Movie";
import APIClient from "../services/api-client";

const apiClient = new APIClient<Movie>("/movie");

const useSimilarMovie = (id: string) =>
  useQuery({
    queryKey: ["movies", id, "similar"],
    queryFn: () => apiClient.getSimilarMovies(id, "/similar"),
  });

export default useSimilarMovie;
