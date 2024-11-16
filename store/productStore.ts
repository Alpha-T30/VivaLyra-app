import { products, productType } from "@/constants/data";
import { create } from "zustand";
type productStoretype = {
  initialProducts: productType[];
  removeItem: (id: number) => void;
};
const useProductStore = create<productStoretype>()((set) => ({
  initialProducts: products,
  removeItem: (id) =>
    set((state) => ({
      initialProducts: state.initialProducts.filter(
        (product) => product.id !== id
      ),
    })),
}));

export default useProductStore;
