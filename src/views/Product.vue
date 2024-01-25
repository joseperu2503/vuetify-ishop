<template>
  <v-container class="page-container">
    <v-row>
      <v-col cols="12" md="6">
        <v-carousel
          hide-delimiters
          class="mt-4 mb-4"
          cycle
          interval="3000"
          height="auto"
        >
          <v-carousel-item
            v-for="(image, index) in product?.images"
            :key="index"
            :src="image"
            cover
            aspect-ratio="1"
            height="auto"
          ></v-carousel-item>
        </v-carousel>
      </v-col>
      <v-col cols="12" md="6">
        <div class="text-h5 font-weight-medium">
          {{ product?.name }}
        </div>
        <div class="text-h5 text-secondary">
          ${{ formatPrice(product?.price) }}
        </div>
        <div class="mt-8">
          <div class="text-body-1">Choose your delivery method</div>

          <v-btn-toggle
            v-model="deliveryMethod"
            rounded="lg"
            color="primary"
            group
            border="sm"
            class="mt-1"
            :class="{ 'w-100': xs }"
          >
            <v-btn
              :value="1"
              prepend-icon="md:local_shipping"
              :class="{ 'w-50': xs }"
            >
              Shipping
            </v-btn>
            <v-btn
              :value="2"
              prepend-icon="mdi-store-outline"
              :class="{ 'w-50': xs }"
            >
              Store pickup
            </v-btn>
          </v-btn-toggle>
        </div>
        <v-card class="mt-4" border="sm" variant="outlined">
          <v-card-item>
            <div class="text-grey-darken-2">
              <v-icon
                icon="mdi-store-outline"
                color="secondary500"
                class="me-2"
              />
              Pick up in store in 2 business hours
            </div>
            <div class="mt-2 text-grey-darken-2">
              <v-icon
                icon="md:schedule_send"
                color="secondary500"
                class="me-2"
              />
              Shipping in 24 hours*
            </div>
            <div class="mt-2 text-grey-darken-2">
              <v-icon
                icon="md:local_shipping"
                color="secondary500"
                class="me-2"
              />
              Free shipping from $ 399.00
            </div>
            <div class="mt-2 text-grey-darken-2">
              <v-icon icon="md:payments" color="secondary500" class="me-2" />
              Pay it in 12 interest-free installments
            </div>
          </v-card-item>
        </v-card>
        <v-btn
          variant="flat"
          color="secondary"
          size="x-large"
          prepend-icon="mdi-cart"
          class="mt-6"
          @click="addProductToCart"
          :class="{ 'w-100': xs }"
        >
          Add to cart
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card>
          <v-card-item>
            <div class="text-h5 font-weight-bold mt-2 mb-8 text-grey-darken-3">
              Specifications
            </div>

            <v-table density="compact">
              <tbody>
                <tr v-for="item in specifications" :key="item.label">
                  <td>{{ item.label }}</td>
                  <td>{{ item.description }}</td>
                </tr>
              </tbody>
            </v-table>
          </v-card-item>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div class="text-h5 font-weight-bold mt-4 text-grey-darken-3">
          Related Products
        </div>
        <v-slide-group show-arrows center-active>
          <v-slide-group-item
            v-for="(product, index) in relatedProducts"
            :key="index"
          >
            <ProductCard :product="product" />
          </v-slide-group-item>
        </v-slide-group>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Product } from "@/interfaces/product.interface";
import { useRoute } from "vue-router";
import { productsData, specificationsData } from "@/data/products.data";
import { useCartStore } from "@/stores/cart";
import { useDisplay } from "vuetify";
import ProductCard from "@/components/ProductCard.vue";
import { formatPrice } from "@/helpers/helpers";

const { xs } = useDisplay();

const route = useRoute();
const productId = route.params.productId;
const products = ref<Product[]>(productsData);
const product = ref<Product | undefined>(
  products.value.find((p) => p.id.toString() == productId)
);

const specifications = ref(specificationsData);
const deliveryMethod = ref(1);

const cartStore = useCartStore();

const addProductToCart = () => {
  if (!product.value) return;
  cartStore.addProductToCart(product.value);
};

const relatedProducts = ref<Product[]>(
  products.value.filter((product) => product.id.toString() !== productId)
);
</script>
<style scoped></style>
