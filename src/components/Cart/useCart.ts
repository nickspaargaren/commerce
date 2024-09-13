import { create } from "zustand";

interface State {
  amount: number;
}

interface Action {
  updateAmount: (amount: State["amount"]) => void;
}

export const useCart = create<State & Action>((set) => ({
  amount: 0,
  updateAmount: (amount) => set(() => ({ amount: amount })),
}));
