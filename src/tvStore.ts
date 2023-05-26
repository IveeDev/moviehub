import { create } from "zustand";

interface TVQuery {
  genreId?: number | string;
  sortOrder?: string;
  searchText?: string;
}

interface TVQueryStore {
  tvQuery: TVQuery;
  setGenreId: (genreId: number | string) => void;
  setSortOrder: (sortOrder: string) => void;
  setSearchText: (searchText: string) => void;
}

const useTVQueryStore = create<TVQueryStore>((set) => ({
  tvQuery: {},
  setGenreId: (genreId) =>
    set((store) => ({ tvQuery: { ...store.tvQuery, genreId } })),

  setSortOrder: (sortOrder) =>
    set((store) => ({ tvQuery: { ...store.tvQuery, sortOrder } })),

  setSearchText: (searchText) => set(() => ({ tvQuery: { searchText } })),
}));

export default useTVQueryStore;
