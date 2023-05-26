import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import { Genre } from "../entity/Genre";
import APIClient from "../services/api-client";

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
