import { useQuery } from "@tanstack/react-query";
import { Movie } from "../entity/Movie";
import APIClient from "../services/api-client";

type ResourceType = "movie" | "tv";

const useSimilarMedia = (id: string, resourceType: ResourceType) => {
  const apiClient = new APIClient<Movie>(`/${resourceType}`);
  return useQuery({
    queryKey: [resourceType, id, `similar${resourceType}`],
    queryFn: () => apiClient.getSimilarResource(id, "/similar"),
  });
};

export default useSimilarMedia;
