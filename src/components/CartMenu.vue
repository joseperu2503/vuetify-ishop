<template>
  <v-menu v-model="showCart" :close-on-content-click="false" location="bottom">
    <template v-slot:activator="{ props }">
      <v-badge
        :content="numProducts"
        color="secondary"
        offset-x="10"
        offset-y="10"
        v-bind="props"
      >
        <v-btn icon="md:shopping_cart"> </v-btn>
      </v-badge>
    </template>

    <v-card min-width="300">
      <v-card-item v-if="cart.length === 0">
        <div
          class="font-weight-normal text-body-1 text-center text-grey-darken-3 mt-2"
        >
          No products selected
        </div>
      </v-card-item>

      <v-list
        v-for="(productCart, index) in cart"
        :key="index"
        v-if="cart.length !== 0"
      >
        <v-list-item
          :title="productCart.product.name"
          :subtitle="`Quantity: ${productCart.quantity}`"
        >
          <template v-slot:prepend>
            <v-img
              :src="productCart.product.images[0]"
              height="100"
              width="100"
            ></v-img>
          </template>
          <span class="font-weight-medium"
            >${{ formatPrice(productCart.product.price) }}</span
          >
          <template v-slot:append>
            <v-btn
              icon="md:delete"
              variant="text"
              class="ms-2"
              color="grey-darken-1"
              @click="cartStore.deleteProductToCart(productCart.product.id)"
            ></v-btn>
          </template>
        </v-list-item>
      </v-list>

      <v-card-item v-if="cart.length !== 0">
        <v-divider></v-divider>
        <div
          class="font-weight-medium text-h6 text-center text-grey-darken-3 mt-2"
        >
          Subtotal<span class="text-primary font-weight-medium ms-2"
            >${{ formatPrice(subTotal) }}</span
          >
        </div>
        <v-btn
          variant="flat"
          color="grey-darken-4"
          size="large"
          class="mt-4"
          block
          @click="goCart"
        >
          Edit cart
        </v-btn>
        <v-btn
          variant="outlined"
          color="grey-darken-2"
          size="large"
          class="mt-3"
          block
          @click="buyNow"
        >
          Buy Now
        </v-btn>
      </v-card-item>
    </v-card>
  </v-menu>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { useCartStore } from "@/stores/cart";
import { storeToRefs } from "pinia";
import { useRouter, useRoute } from "vue-router";
import { formatPrice } from "@/helpers/helpers";

const cartStore = useCartStore();

const { cart, subTotal, numProducts } = storeToRefs(cartStore);

const showCart = ref(false);

const router = useRouter();
const route = useRoute();

const buyNow = () => {
  router.push("/shipping");
};

const goCart = () => {
  router.push("/cart");
};

watch(route, () => {
  showCart.value = false;
});
</script>

<style scoped></style>
