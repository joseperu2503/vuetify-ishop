import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { Product } from '@/interfaces/product.interface';

export const useCartStore = defineStore("appbar", () => {
  const cart = ref<{
    product: Product,
    quantity: number,
  }[]>([])

  const subTotal = computed(() => {
    return cart.value.reduce((sum, productCart) => sum + productCart.product.price * productCart.quantity, 0);
  })

  const addProductToCart = (product: Product) => {

    const productIndex = cart.value.findIndex(productCart => productCart.product.id === product.id);
    console.log(productIndex)
    if (productIndex === -1) {
      cart.value.push({
        product: product,
        quantity: 1,
      })
    } else {
      cart.value[productIndex].quantity = cart.value[productIndex].quantity + 1
    }

  }

  const deleteProductToCart = (productId: number) => {
    cart.value = cart.value.filter(productCart => productCart.product.id !== productId);
  }

  return { cart, addProductToCart, deleteProductToCart, subTotal };
});
