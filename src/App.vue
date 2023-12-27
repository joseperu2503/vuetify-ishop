<template>
  <router-view />
</template>

<script lang="ts" setup>
import { useCartStore } from './stores/cart';

const cartStore = useCartStore()
cartStore.initCart()

</script>
