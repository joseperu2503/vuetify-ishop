<template>
  <v-carousel hide-delimiters class="mt-4 mb-4" cycle interval="3000" height="min-content">
    <template v-slot:prev="{ props }">
      <v-btn variant="tonal" @click="props.onClick" color="grey-darken-4" rounded>
        <v-icon icon="md:arrow_back_ios" color="grey-darken-1"></v-icon>
      </v-btn>
    </template>
    <template v-slot:next="{ props }">
      <v-btn variant="tonal" @click="props.onClick" color="grey-darken-4" rounded>
        <v-icon icon="md:arrow_forward_ios" color="grey-darken-1"></v-icon>
      </v-btn>
    </template>
    <v-carousel-item>
      <v-responsive :aspect-ratio="mdAndUp ? 3 : smAndUp ? 3 : 1" class="bg-black">
        <div class="info1">
          <div class="d-flex align-center">
            <v-icon icon="md:apple" color="white" :size="mdAndUp ? 50 : 25"></v-icon>
            <span class="text-white text-h5 text-sm-h4 text-md-h3">iPhone 14 Pro</span>
          </div>
          <span class="text-white text-md-h6 font-weight-light">Your new superpower.</span>
          <div class="mt-4">
            <v-btn color="primary" :size="mdAndUp ? 'x-large' : 'default'">
              AVAILABLE NOW
            </v-btn>
          </div>
        </div>
        <v-img src="/banner/banner1.png" :width="smAndUp ? '20%' : '40%'" class="image1"></v-img>
      </v-responsive>
    </v-carousel-item>
    <v-carousel-item>
      <v-responsive :aspect-ratio="mdAndUp ? 3 : smAndUp ? 3 : 1" class="bg-white">
        <div class="info1">
          <div class="d-flex align-center mb-4">
            <v-icon icon="md:apple" color="grey-darken-3" :size="40"></v-icon>
            <span class="text-grey-darken-3 text-h4">iPhone 14 Pro</span>
          </div>
          <span class="text-grey-darken-3 text-h6 text-md-h5 text-lg-h4 font-weight-bold">Pro cameras.</span>
          <span class="text-grey-darken-3 text-h6 text-md-h5 text-lg-h4 font-weight-bold">Pro display.</span>
          <span class="text-grey-darken-3 text-h6 text-md-h5 text-lg-h4 font-weight-bold">Pro performance.</span>
        </div>
        <v-img src="/banner/banner2.png" :width="smAndUp ? '30%' : '50%'" class="image1"></v-img>
      </v-responsive>
    </v-carousel-item>
  </v-carousel>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify'

const { smAndUp, mdAndUp } = useDisplay()

</script>
<style scoped>
.image1 {
  position: absolute;
  right: 10%;
  bottom: 0;
}

.info1 {
  position: absolute;
  left: 15%;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

@media (max-width: 600px) {
  .image1 {
    right: 50%;
    transform: translateX(50%);
    bottom: 0;
  }

  .info1 {
    width: max-content;
    top: 5%;
    left: 50%;
    transform: translateX(-50%);
    align-items: center;

  }
}
</style>
