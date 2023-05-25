import { create } from "zustand";

interface MovieQuery {
  genreId?: number | string;
  sortOrder?: string;
}

interface MovieQueryStore {
  movieQuery: MovieQuery;
  setGenreId: (genreId: number | string) => void;
  setSortOrder: (sortOrder: string) => void;
}

const useMovieQueryStore = create<MovieQueryStore>((set) => ({
  movieQuery: {},
  setGenreId: (genreId) =>
    set((store) => ({ movieQuery: { ...store.movieQuery, genreId } })),

  setSortOrder: (sortOrder) =>
    set((store) => ({ movieQuery: { ...store.movieQuery, sortOrder } })),
}));

export default useMovieQueryStore;
