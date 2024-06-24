import { create } from "zustand";

interface SearchProps {
  searchText: string;
  onSetSearchText: (searchText: string) => void;
}

export const useSearchStore = create<SearchProps>((set) => ( {
  searchText: "",
  onSetSearchText: (searchText: string) => set((state) => ({ searchText: searchText })), 
}))