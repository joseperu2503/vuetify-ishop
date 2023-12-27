<template>
  <v-container class="h-screen" fluid>
    <v-layout class="h-100">
      <v-app-bar :elevation="2" color="primary">
        <v-app-bar-title>
          <v-icon icon="md:apple"></v-icon>
          iShop
        </v-app-bar-title>
        <template v-slot:append>
          <CartMenu />
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
import CartMenu from '@/components/CartMenu.vue';
</script>
