<script setup>
import { RouterView } from "vue-router";
import HomeView from "./views/HomeView.vue";
</script>

<template>
  <!-- <RouterLink to="/">Home</RouterLink>
	<RouterLink to="/About">About</RouterLink> -->
  <!-- <RouterView /> -->
  <Suspense>
    <template #default> <HomeView /> </template>
    <template #fallback> Loading... </template>
  </Suspense>
</template>

<style scoped></style>
