<template>
  <v-card variant="flat">
    <v-img
      contain
      max-height="200"
      height="200"
      :src="product.images[0]"
      @click="goProduct(product.id)"
      class="product-image"
    ></v-img>
    <v-card-item>
      <div @click="goProduct(product.id)" class="product-name text-center">
        {{ product.name }}
      </div>
      <div class="text-primary text-center">${{ product.price }}</div>
    </v-card-item>
  </v-card>
</template>

<script setup lang="ts">
import { Product } from "@/interfaces/product.interface";
import { useCartStore } from "@/stores/cart";
import { useRouter } from "vue-router";

const router = useRouter();

const goProduct = (productId: number) => {
  router.push(`/product/${productId}`);
};

const { product } = defineProps<{
  product: Product;
}>();

const { addProductToCart } = useCartStore();
</script>

<style scoped lang="scss">
.product-image {
  cursor: pointer;
}

.product-name {
  cursor: pointer;
}
</style>
