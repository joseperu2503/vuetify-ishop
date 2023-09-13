<template>
  <v-container class="page-container">
    <v-row class="h-100">
      <v-col>
        <v-container>
          <div class="text-h4 font-weight-bold text-grey-darken-3">Shipping</div>
          <v-row class="mt-10">
            <v-col>
              <v-text-field label="First name" variant="underlined" density="compact" color="primary" single-line />
            </v-col>
            <v-col>
              <v-text-field label="Last name" variant="underlined" density="compact" color="primary" single-line />
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-text-field label="Email" variant="underlined" density="compact" color="primary" single-line
                prepend-icon="md:email" />
            </v-col>
            <v-col>
              <v-text-field label="Phone" variant="underlined" density="compact" color="primary" single-line
                prepend-icon="md:phone" />
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-text-field label="House number and street name" variant="underlined" density="compact" color="primary"
                single-line prepend-icon="md:house" />
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-text-field label="City" variant="underlined" density="compact" color="primary" single-line />
            </v-col>
            <v-col>
              <v-text-field label="Country" variant="underlined" density="compact" color="primary" single-line />
            </v-col>
          </v-row>
        </v-container>
      </v-col>
      <v-col class="d-flex align-center h-100">
        <v-container class="d-flex flex-column h-100">
          <div style="flex:1; overflow-y:auto">
            <v-list v-for="(product, index) in cart" :key="index">
              <v-list-item class="my-4">
                <template v-slot:prepend>
                  <v-img :src="product.images[0]" height="120" width="120"></v-img>
                </template>
                <div class="text-h6 ">{{ product.name }}</div>
                <div class="mt-3">Code MHVDSD52F</div>
                <div class="">Quantity: 2</div>
                <span class="font-weight-medium text-primary text-h6 mt-2">${{ product.price }}</span>
              </v-list-item>
            </v-list>
          </div>
          <div>
            <v-divider class=" mt-2"></v-divider>

            <div class="d-flex justify-space-between mt-2">
              <span>Salex tax</span>
              <span class="text-primary">$5.00</span>
            </div>
            <div class="d-flex justify-space-between mt-2">
              <span class="font-weight-medium text-grey-darken-3">Subtotal</span>
              <span class="text-primary ">$4,925.00</span>
            </div>
            <v-divider class=" mt-2"></v-divider>
            <div class="d-flex justify-space-between mt-5">
              <span class="font-weight-medium text-grey-darken-3 text-h5">Total</span>
              <span class="text-primary text-h5">$8,925.00</span>
            </div>
            <v-divider class=" mt-2"></v-divider>
            <v-checkbox color="primary" value="primary" hide-details>
              <template v-slot:label>
                I have read and agree to the website <span class="font-weight-bold ms-1">terms and conditions</span>
              </template>
            </v-checkbox>
            <v-btn variant="flat" color="grey-darken-4" size="large" class="mt-8" block>
              Continue
            </v-btn>

          </div>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { useCartStore } from '@/stores/cart';
import { storeToRefs } from 'pinia';

const cartStore = useCartStore()
const { cart } = storeToRefs(cartStore);
</script>

<style scoped>
.layout {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
