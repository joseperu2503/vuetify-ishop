<template>
  <v-layout class="h-100">
    <v-app-bar :elevation="0">
      <template v-slot:prepend>
        <router-link
          class="text-h5 d-flex align-center text-grey-darken-4 logo"
          to="/"
        >
          <v-icon icon="md:apple" class="text-primary"></v-icon>
          <span>iShop</span>
        </router-link>
      </template>
      <div class="links">
        <div class="link">Mac</div>
        <div class="link">iPhone</div>
        <div class="link">iPad</div>
        <div class="link">iWatch</div>
      </div>

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
</template>

<script setup lang="ts">
import CartMenu from "@/components/CartMenu.vue";
</script>

<style scoped lang="scss">
.logo {
  cursor: pointer;
  text-decoration: none;
}

.links {
  display: flex;
  gap: 24px;
}

.link {
  font-weight: 500;
  cursor: pointer;
  &:hover {
    color: #fb9119;
  }
}
</style>
