<template>
  <v-row>
    <v-col>
      <Banner></Banner>
    </v-col>
  </v-row>
  <v-container class="page-container">
    <v-row>
      <v-col v-for="product in products" :key="product.id" cols="12" sm="6" md="4" lg="3">
        <v-card>
          <v-img contain height="250" :src="product.images[0]"></v-img>
          <v-card-item>
            <v-card-title @click="goProduct(product.id)">{{ product.name }}</v-card-title>
            <v-card-title class="mt-4">${{ product.price }}</v-card-title>
          </v-card-item>
          <v-card-actions>
            <v-btn variant="tonal" color="primary" prepend-icon="mdi-cart" class="mt-2">
              Add to cart
            </v-btn>
            <!-- <v-btn class="mt-2">
              Buy
            </v-btn> -->
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Product } from '@/interfaces/product.interface'
import { useRouter } from 'vue-router';
import { productsData } from '@/data/products.data'
import Banner from '@/components/Banner.vue'

const router = useRouter();
const products = ref<Product[]>(productsData)

const goProduct = (productId: number) => {
  router.push(`/product/${productId}`)
}

</script>

