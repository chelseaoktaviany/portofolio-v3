import { create } from "zustand";

interface ContactStore {
  loading: boolean;
  success: boolean;
  error: string | null;
  setStatus: (data: Partial<Omit<ContactStore, "setStatus">>) => void;
  reset: () => void;
}

export const useContactStore = create<ContactStore>((set) => ({
  loading: false,
  success: false,
  error: null,
  setStatus: (data) => set(data),
  reset: () => set({ loading: false, success: false, error: null }),
}));
