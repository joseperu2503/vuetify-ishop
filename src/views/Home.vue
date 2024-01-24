<template>
  <v-row>
    <v-col>
      <Banner2></Banner2>
    </v-col>
  </v-row>
  <v-container class="page-container">
    <v-row>
      <v-col
        v-for="product in products"
        :key="product.id"
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <ProductCard :product="product" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Product } from "@/interfaces/product.interface";
import { productsData } from "@/data/products.data";
import ProductCard from "@/components/ProductCard.vue";
import Banner2 from "@/components/Banner2.vue";
const products = ref<Product[]>(productsData);
</script>
