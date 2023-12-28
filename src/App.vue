<template>
  <router-view :key="$route.fullPath"/>
</template>

<script lang="ts" setup>
import { useCartStore } from './stores/cart';

const cartStore = useCartStore()
cartStore.initCart()

</script>
