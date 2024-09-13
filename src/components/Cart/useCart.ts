import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface State {
  amount: number;
}

interface Action {
  updateAmount: (amount: State["amount"]) => void;
}

export const useCart = create<State & Action>()(
  persist(
    (set) => ({
      amount: 0,
      updateAmount: (amount) => set({ amount }),
    }),
    {
      name: "cart",
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);
