<template>
  <v-row>
    <v-col>
      <v-carousel hide-delimiters height="300" class="mt-4 mb-4" cycle interval="3000">
        <v-carousel-item v-for="(image, index) in product?.images" :key="index" :src="image" contain></v-carousel-item>
      </v-carousel>
    </v-col>
    <v-col>
      <div class="text-h6">
        {{ product?.name }}
      </div>
      <div class="text-h5 text-primary">
        ${{ product?.price }}
      </div>
      <div class="mt-5">
        <div>Choose your delivery method</div>

        <v-btn-toggle v-model="deliveryMethod" rounded="lg" color="primary" group border="sm">
          <v-btn :value="1" prepend-icon="md:local_shipping">
            Shipping
          </v-btn>
          <v-btn :value="2" prepend-icon="mdi-store-outline">
            Store pickup
          </v-btn>
        </v-btn-toggle>

      </div>
      <v-btn variant="flat" color="grey-darken-4" size="large" prepend-icon="mdi-cart" class="mt-6">
        Add to cart
      </v-btn>
      <v-card class="mt-4" border="sm" variant="outlined">
        <v-card-item>
          <div><v-icon icon="mdi-store-outline" color="primary" class="me-2" />Pick up in store in 2 business
            hours</div>
          <div><v-icon icon="md:schedule_send" color="primary" class="me-2" />Shipping in 24 hours*</div>
          <div><v-icon icon="md:local_shipping" color="primary" class="me-2" />Free shipping from S/ 399.00
          </div>
          <div><v-icon icon="md:payments" color="primary" class="me-2" />Pay it in 12 interest-free installments
          </div>
        </v-card-item>

      </v-card>
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
const deliveryMethod = ref(1)
</script>
