<script setup>
import Pagination from "@/components/Pagination.vue";
import ProductCard from "@/components/ProductCard.vue";
import { onBeforeMount, onMounted } from "vue";

onBeforeMount(() => {
  console.log("Component will be mounted soon");
  // lakukan persiapan atau efek samping sebelum mounting
});

onMounted(() => {
  console.log("Component has been mounted");
  // lakukan tugas setelah mounting, seperti fetching data
});
</script>

<template>
  <main>
    <div class="product-grid">
      <ProductCard />
    </div>
    <Pagination />
  </main>
</template>

<style scoped>
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  width: 80%;
  margin: 0 auto;
}
</style>
