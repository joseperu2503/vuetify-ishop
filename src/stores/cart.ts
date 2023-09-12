import { ref } from "vue";
import { defineStore } from "pinia";
import { Product } from '@/interfaces/product.interface';
import { productsData } from "@/data/products.data";

export const useCartStore = defineStore("appbar", () => {

  const products = ref<Product[]>(productsData)

  const cart = ref<Product[]>(products.value.slice(0, 6))
  return { cart };
});
