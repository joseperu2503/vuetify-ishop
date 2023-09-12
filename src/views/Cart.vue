<template>
  <div class="text-h5 font-weight-bold text-grey-darken-3">My Cart</div>
  <v-row class="mt-8">
    <v-col cols="8">
      <v-table>
        <thead>
          <tr>
            <th class="text-left">
              Product
            </th>
            <th class="text-left">
              Price
            </th>
            <th class="text-left">
              Quantity
            </th>
            <th class="text-left">
              Subtotal
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in cart" :key="product.id">
            <td>
              <div class="d-flex align-center">
                <v-img :src="product.images[0]" :height="100" :width="100" inline></v-img>
                {{ product.name }}

              </div>
            </td>
            <td>${{ product.price }}</td>
            <td><v-text-field variant="outlined" density="compact" value="1"></v-text-field></td>
            <td>
              <div class="d-flex flex-column mt-12">
                ${{ product.price }}
                <v-btn icon="md:delete" variant="text" class="mt-6" color="grey-darken-1"></v-btn>

              </div>

            </td>
          </tr>
        </tbody>
      </v-table>
    </v-col>
    <v-col cols="4">
      <v-card title="Summary" color="grey-lighten-4">
        <v-card-item>
          <div class="d-flex justify-space-between">
            <span>Order total</span>
            <span class="text-primary">$2,300.00</span>
          </div>
          <div class="d-flex justify-space-between mt-2">
            <span>Shipping</span>
            <span class="text-primary">$19.00</span>
          </div>
          <div class="d-flex justify-space-between mt-2">
            <span>Salex tax</span>
            <span class="text-primary">$5.00</span>
          </div>
          <v-divider class=" mt-2"></v-divider>
          <div class="d-flex justify-space-between mt-2">
            <span class="font-weight-medium text-grey-darken-3">Subtotal</span>
            <span class="text-primary ">$4,925.00</span>
          </div>
          <div class="mt-8">Promo code</div>
          <v-text-field variant="outlined" density="compact" placeholder="X1452S" max-width="100"></v-text-field>

          <v-btn variant="flat" color="grey-darken-4" size="large" class="mt-4" block>
            Continue
          </v-btn>

        </v-card-item>

      </v-card>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { useCartStore } from '@/stores/cart';
import { storeToRefs } from 'pinia';

const cartStore = useCartStore()
const { cart } = storeToRefs(cartStore);
</script>

<style scoped></style>
