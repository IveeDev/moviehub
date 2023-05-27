import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

type ResourceType = "movie" | "tv";

const useResource = <T>(id: string, resourceType: ResourceType) => {
  const apiClient = new APIClient<T>(`/${resourceType}`);

  return useQuery({
    queryKey: [resourceType, id],
    queryFn: () => apiClient.get(id),
  });
};

export default useResource;
