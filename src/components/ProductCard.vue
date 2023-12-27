<template>
  <v-card>
    <v-img contain height="250" :src="product.images[0]"></v-img>
    <v-card-item>
      <v-card-title @click="goProduct(product.id)">{{ product.name }}</v-card-title>
      <v-card-title class="mt-4">${{ product.price }}</v-card-title>
    </v-card-item>
    <v-card-actions>
      <v-btn variant="tonal" color="primary" prepend-icon="mdi-cart" class="mt-2" @click="addProductToCart(product)">
        Add to cart
      </v-btn>
      <!-- <v-btn class="mt-2">
        Buy
      </v-btn> -->
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import { Product } from '@/interfaces/product.interface';
import { useCartStore } from '@/stores/cart';
import { useRouter } from 'vue-router';

const router = useRouter();

const goProduct = (productId: number) => {
  router.push(`/product/${productId}`)
}

const { product } = defineProps<{
  product: Product
}>()

const { addProductToCart } = useCartStore()

</script>

<style scoped></style>
