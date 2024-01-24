<script setup>
import PreviewComponent from '@/components/PreviewComponent.vue';
import AboutComponent from '@/components/AboutComponent.vue';
import ReviewComponent from '@/components/ReviewComponent.vue';
</script>

<template>
    
  <!-- preview -->
  <PreviewComponent></PreviewComponent>
  <!-- about -->
  <AboutComponent></AboutComponent>
  <!-- review -->
  <ReviewComponent></ReviewComponent>
</template>

<style scoped>

body {
  font-family: "Gilroy-Regular";
  background-color: #af9fff;
  background: linear-gradient( 60deg, #af9fff 50%, #8c75fc 50%);
}

* {
  padding: 0;
  margin: 0;
}

</style>
