<template>
  <v-container class="h-screen" fluid>
    <v-layout class="h-100">
      <v-app-bar :elevation="0">
        <template v-slot:prepend>
          <router-link class="text-h5 d-flex align-center text-grey-darken-4 logo" to="/">
            <v-icon icon="md:apple" class="text-primary"></v-icon>
            <span>iShop</span>
          </router-link>
        </template>
        <template v-slot:append>
          <v-btn icon="md:search"></v-btn>
          <CartMenu />
          <v-btn icon="md:person"></v-btn>
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
import CartMenu from '@/components/CartMenu.vue';
</script>

<style scoped>
.logo {
  cursor: pointer;
  text-decoration: none;
}
</style>
