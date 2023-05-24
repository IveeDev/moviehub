import { useQuery } from "@tanstack/react-query";
import APIClient, { MovieCastCrewResponse } from "../services/api-client";
// import { CastCrew } from "../entity/CastCrew";

const apiClient = new APIClient<MovieCastCrewResponse>("/movie");

const useCast = (id: string) =>
  useQuery({
    queryKey: ["movie", id, "casts"],
    queryFn: () => apiClient.get(id, "/credits"),
  });

export default useCast;
