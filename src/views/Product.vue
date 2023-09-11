<template>
  <v-container>
    <v-layout>
      <v-app-bar :elevation="2" color="primary" density="compact">
        <v-app-bar-title>Tech shop</v-app-bar-title>
        <template v-slot:append>
          <v-btn variant="outlined">Login</v-btn>
        </template>
      </v-app-bar>
      <v-main class="mt-8">
        <v-container class="main-container">
          <v-row>
            <v-col>
              <v-carousel hide-delimiters height="300" class="mt-4 mb-4">
                <v-carousel-item v-for="(image, index) in product?.images" :key="index" :src="image"
                  contain></v-carousel-item>
              </v-carousel>
            </v-col>
            <v-col>
              <div>{{ product?.brand }}</div>
              <div class="text-h6">
                {{ product?.name }}
              </div>
              <div class="text-h6">
                ${{ product?.price }}
              </div>
              <v-btn variant="tonal" color="primary" prepend-icon="mdi-cart" class="mt-2">
                Add to cart
              </v-btn>
              <v-btn class="mt-2" color="primary">
                Buy
              </v-btn>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-card title="Specifications">
                <v-card-item>
                  <v-table density="compact">
                    <tbody>
                      <tr v-for="item in Specifications" :key="item.label">
                        <td>{{ item.label }}</td>
                        <td>{{ item.description }}</td>
                      </tr>
                    </tbody>
                  </v-table>
                </v-card-item>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-layout>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Product } from '@/interfaces/product.interface'
import { useRoute } from 'vue-router';
import { productsData } from '@/data/products.data'
const route = useRoute();
const productId = route.params.productId
const products = ref<Product[]>(productsData)
const product = ref<Product | undefined>(products.value.find(p => p.id.toString() == productId))

const Specifications = ref([
  {
    label: 'Battery Description',
    description: 'Built-in rechargeable lithium‑ion battery',
  },
  {
    label: 'Frontal camera',
    description: '12 MP',
  },
  {
    label: 'Dual SIM',
    description: 'No',
  },
  {
    label: 'Main Camera',
    description: '12 + 12 MP',
  },
  {
    label: 'RAM',
    description: '4 GB',
  },
  {
    label: 'Screen Size',
    description: '6.1"',
  },
  {
    label: 'Operating System',
    description: 'Apple iOS 16',
  },
  {
    label: 'Internal Memory',
    description: '128 Gb',
  },
  {
    label: 'Product Name',
    description: 'iPhone 14 Pro Max 128GB',
  },
  {
    label: 'Brand',
    description: 'Apple',
  },
  {
    label: 'Color',
    description: 'Deep Purple',
  },
  {
    label: 'Height',
    description: '6.33 inches',
  },
  {
    label: 'Width',
    description: '3.05 inches',
  },
  {
    label: 'Depth',
    description: '0.31 inches',
  },
  {
    label: 'Weight',
    description: '8.47 ounces',
  }
])
</script>

<style scoped>
.main-container {
  max-width: 1200px;
}
</style>
