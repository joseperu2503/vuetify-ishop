<template>
  <div class="bg-black banner">
    <div class="info1">
      <div class="d-flex align-center">
        <v-icon icon="md:apple" color="white" :size="50"></v-icon>
        <span class="text-white text-h4 text-sm-h3"> iPhone 14 Pro </span>
      </div>
      <span class="text-white text-sm-h6 font-weight-light">
        Your new superpower.
      </span>
      <div class="mt-4">
        <v-btn color="primary" size="x-large"> AVAILABLE NOW </v-btn>
      </div>
    </div>
    <div class="degradado"></div>
    <v-img src="/banner/banner1.png" class="image1"></v-img>
  </div>
</template>

<script setup lang="ts">
import { useDisplay } from "vuetify";

const { mdAndUp } = useDisplay();
</script>
<style scoped>
.banner {
  height: 380px;
  width: 100%;
  position: relative;
  overflow: hidden;
}

.degradado {
  width: 100%;
  height: 100%;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 1) 10%,
    rgba(92, 173, 74, 0) 100%
  );
  z-index: 5;
  position: absolute;
}

.image1 {
  position: absolute;
  right: 10%;
  bottom: 0;
  height: 350px;
  width: 280px;
}

.info1 {
  position: absolute;
  left: 15%;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 10;
}

@media (max-width: 600px) {
  .image1 {
    position: absolute;
    right: -40px;
    bottom: 0;
    height: 380px;
    width: 270px;
  }

  .info1 {
    position: absolute;
    left: 24px;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    z-index: 10;
  }
}
</style>
