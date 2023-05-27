import { useQuery } from "@tanstack/react-query";
import APIClient, { CastCrewResponse } from "../services/api-client";

type ResourceType = "movie" | "tv";

const useCast = (id: string, resourceType: ResourceType) => {
  const apiClient = new APIClient<CastCrewResponse>(`/${resourceType}`);
  return useQuery({
    queryKey: [resourceType, id, "casts"],
    queryFn: () => apiClient.get(id, "/credits"),
  });
};

export default useCast;
