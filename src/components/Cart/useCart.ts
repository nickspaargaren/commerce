import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface Product {
  id: number;
  title: string;
  price: number;
}

interface State {
  products: Product[];
}

interface Actions {
  addProduct: (product: Product) => void;
  deleteProduct: (id: Product["id"]) => void;
  getAmount: () => string;
}

export const useCart = create<State & Actions>()(
  persist(
    (set, get) => ({
      products: [],

      addProduct: (product) =>
        set((state) => ({
          products: [...state.products, product],
        })),

      deleteProduct: (id) =>
        set((state) => ({
          products: state.products.filter((product) => product.id !== id),
        })),

      getAmount: () => {
        const { products } = get();

        if (products.length === 0) return parseFloat("0").toFixed(2);

        const totalPrice = products.reduce(
          (total, product) => total + product.price,
          0,
        );

        const priceInEuros = (totalPrice / 100).toFixed(2);

        return priceInEuros;
      },
    }),
    {
      name: "cart",
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);
