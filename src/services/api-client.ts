import axios, { AxiosRequestConfig } from "axios";
import { CastMember } from "../entity/CastMember";

export interface FetchResponse<T> {
  page: number;
  results: T[];
}

export interface CastCrewResponse {
  cast: CastMember[];
  // Other properties if available
}

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "b18ec24c64c17e2fe379f7f64e72e08c",
  },
});

class APIClient<T> {
  endPoint: string;

  constructor(endPoint: string) {
    this.endPoint = endPoint;
  }

  // To get a list of genres
  getAny = (config?: AxiosRequestConfig) => {
    return axiosInstance
      .get<any[]>(this.endPoint, config)
      .then((res) => res.data);
  };
  // To get all games, posts etc
  getAll = (config: AxiosRequestConfig) => {
    // We did this because of the query parameter when fetching the games. It is optional
    return axiosInstance
      .get<FetchResponse<T>>(this.endPoint, config)
      .then((res) => res.data);
  };

  post = (data: T) => {
    return axiosInstance
      .post<FetchResponse<T>>(this.endPoint, data)
      .then((res) => res.data);
  };

  // Get a single movie or post etc
  get = (id: string | number, extension: string = "") => {
    return axiosInstance
      .get<T>(this.endPoint + "/" + id + extension)
      .then((res) => res.data);
  };

  // Get a single movie or tvShows with cast and crew etc
  getSimilarResource = (id: string | number, extension: string = "") => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endPoint + "/" + id + extension)
      .then((res) => res.data);
  };
}

export default APIClient;
