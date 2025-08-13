import { create } from "zustand";

import { ProductProps } from "@/utils/data/products";

import * as cartInMemory from "./helpers/cart-in-memory";

export type productCartProps = ProductProps & {
  quantity: number;
};

type StateProps = {
  products: productCartProps[];
  add: (product: ProductProps) => void;
};

export const useCartStore = create<StateProps>((set) => ({
  products: [], // Guarda

  add: (product: ProductProps) =>
    set((state) => ({
      products: cartInMemory.add(state.products, product),
    }))
}));
