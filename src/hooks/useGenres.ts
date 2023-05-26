import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Genre } from "../entity/Genre";
import ms from "ms";
import genres from "../Data/genres";
import tvGenres from "../Data/tvGenres";

const useGenres = (endpoint: string, initialData: any) => {
  const apiClient = new APIClient<Genre>(endpoint);
  return useQuery({
    queryKey: [endpoint],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    initialData,
  });
};

export default useGenres;
