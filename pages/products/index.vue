<template>
  <div>
    <h1 class="py-3 text-center font-bold">Product Page</h1>
    <hr class="border-2 mt-2 mb-2">
    <div class="grid grid-cols-4 gap-5">
      <div v-for="product in products">
          <ProductCard :product="product" />
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "products",
});
const { data: products } = await useFetch("https://fakestoreapi.com/products");
</script>

<style scoped>
h2 {
  margin-bottom: 30px;
  font-size: 36px;
}
p {
  margin: 20px 0;
}
</style>
