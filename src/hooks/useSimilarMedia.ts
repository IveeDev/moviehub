import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

type ResourceType = "movie" | "tv";

const useSimilarMedia = <T>(
  id: string,
  resourceType: ResourceType,
  endpoint: string
) => {
  const apiClient = new APIClient<T>(`/${resourceType}`);
  return useQuery({
    queryKey: [resourceType, id, `${endpoint}${resourceType}`],
    queryFn: () => apiClient.getSimilarResource(id, `/${endpoint}`),
  });
};

export default useSimilarMedia;
