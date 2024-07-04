<script setup>
import { onMounted, ref, watch, computed } from "vue";
import axios from "axios";

import Pagination from "@/components/Pagination.vue";
import ProductCard from "@/components/ProductCard.vue";
import Loading from "@/components/Loading.vue";

const products = ref([]);
const page = ref(1);
const limit = ref(8);
const isLoading = ref(true);

const API_URL = computed(
  () =>
    `http://localhost:3000/products?_page=${page.value}&_per_page=${limit.value}`
);

async function fetchData() {
  const response = await axios.get(API_URL.value);
  return response.data;
}

async function loadProducts() {
  isLoading.value = true;
  try {
    products.value = await fetchData();
  } finally {
    isLoading.value = false;
  }
}

onMounted(loadProducts);

watch(page, loadProducts);

function changePage(newPage) {
  if (newPage < 1) {
    newPage = 1;
  } else if (newPage > products.value.pages) {
    newPage = products.value.pages;
  }
  page.value = newPage;
}
</script>

<template>
  <main>
    <div v-if="isLoading">
      <Loading />
    </div>
    <div v-else>
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
    </div>
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
