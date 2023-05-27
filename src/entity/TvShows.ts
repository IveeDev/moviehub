import { Genre } from "./Genre";
import { ProductionCompanies } from "./ProductionCompany";

export interface TV {
  id: number;
  name: string;
  genres: Genre[];
  genre_ids: number[];
  original_name: string;
  overview: string;
  backdrop_path: string;
  poster_path: string;
  vote_count: number;
  vote_average: number;
  runtime: number;
  release_date: string;
  production_companies: ProductionCompanies[];
  status: string;
  first_air_date: string;
}
