import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  page: number;
  results: T[];
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

  // Get a single game or post etc
  get = (id: number | string) => {
    return axiosInstance
      .get<T>(this.endPoint + "/" + id)
      .then((res) => res.data);
  };
}

export default APIClient;
