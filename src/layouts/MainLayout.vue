<template>
  <v-container class="h-screen" fluid>
    <v-layout class="h-100">
      <v-app-bar :elevation="2" color="primary">
        <v-app-bar-title>
          <v-icon icon="md:apple"></v-icon>
          iShop
        </v-app-bar-title>
        <template v-slot:append>
          <v-menu v-model="showCart" :close-on-content-click="false" location="bottom">
            <template v-slot:activator="{ props }">
              <v-badge content="9" color="grey-darken-4" offset-x="10" offset-y="10" class="me-4" v-bind="props">
                <v-btn icon="md:shopping_cart">
                </v-btn>
              </v-badge>
            </template>

            <v-card min-width="300">
              <v-list v-for="(product, index) in cart" :key="index">
                <v-list-item :title="product.name" :subtitle="`Quantity: ${2}`">
                  <template v-slot:prepend>
                    <v-img :src="product.images[0]" height="100" width="100"></v-img>
                  </template>
                  <span class="font-weight-medium">${{ product.price }}</span>
                  <template v-slot:append>
                    <v-btn icon="md:delete" variant="text" class="ms-2" color="grey-darken-1"></v-btn>
                  </template>
                </v-list-item>
              </v-list>

              <v-card-item>
                <v-divider></v-divider>
                <div class="font-weight-medium text-h6 text-center text-grey-darken-3 mt-2">Subtotal<span
                    class="text-primary font-weight-medium ms-2 ">$2,099.00</span></div>
                <v-btn variant="flat" color="grey-darken-4" size="large" class="mt-4" block @click="goCart">
                  Edit cart
                </v-btn>
                <v-btn variant="outlined" color="grey-darken-2" size="large" class="mt-3" block @click="buyNow">
                  Buy Now
                </v-btn>
              </v-card-item>
            </v-card>
          </v-menu>
          <v-btn variant="outlined">Login</v-btn>
        </template>
      </v-app-bar>
      <v-main>
        <!-- <v-container class="h-100" fluid> -->
          <router-view></router-view>
        <!-- </v-container> -->
      </v-main>
    </v-layout>
  </v-container>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useCartStore } from '@/stores/cart';
import { storeToRefs } from 'pinia';
import { useRouter, useRoute } from 'vue-router';

const cartStore = useCartStore()
const { cart } = storeToRefs(cartStore);

const showCart = ref(false)


const router = useRouter();
const route = useRoute();

const buyNow = () => {
  router.push('/shipping')
}

const goCart = () => {
  router.push('/cart')
}

watch(route, () => {
  showCart.value = false
})

</script>
