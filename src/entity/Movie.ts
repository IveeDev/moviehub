import { Genre } from "./Genre";
import { ProductionCompanies } from "./ProductionCompany";

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  id: number | string;
  genres: Genre[];
  tagline: string;
  overview: string;
  genre_ids: number[];
  original_language: string;
  popularity: number;
  vote_average: number;
  vote_count: number;
  original_title: string;
  release_date: string;
  status: string;
  runtime: number;
  title: string;
  production_companies: ProductionCompanies[];
  poster_path: string;
}
