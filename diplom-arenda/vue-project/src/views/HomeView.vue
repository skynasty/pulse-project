<script setup>
import NavComponent from '@/components/NavComponent.vue';

</script>

<template>
  <!-- header -->
    <NavComponent></NavComponent>
    <slot/>
  <!-- preview -->

</template>

<style scoped>

body {
  /* font-family: "Gilroy-Regular"; */
  background-color: #af9fff;
  background: linear-gradient( 60deg, #af9fff 50%, #8c75fc 50%);
}

* {
  padding: 0;
  margin: 0;
}

</style>
