<script setup>
import { onMounted, ref, watch, computed } from "vue";
import axios from "axios";

import Pagination from "@/components/Pagination.vue";
import ProductCard from "@/components/ProductCard.vue";

const products = ref([]);
const page = ref(1);
const limit = ref(8);

const API_URL = computed(
  () =>
    `http://localhost:3000/products?_page=${page.value}&_per_page=${limit.value}`
);

async function fetchProducts() {
  products.value = await axios.get(API_URL.value).then((res) => res.data);
}

onMounted(fetchProducts);

watch(page, fetchProducts);

function changePage(newPage) {
  if (newPage < 1) {
    newPage = 1;
  }
  if (newPage > products.value.pages) {
    newPage = products.value.pages;
  }
  page.value = newPage;
}
</script>

<template>
  <main>
    <div class="product-grid">
      <ProductCard
        v-for="product in products.data"
        :key="product.id"
        :product="product"
      />
    </div>
    <Pagination
      :page="page"
      :totalPages="products.pages"
      @change-page="changePage"
    />
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
