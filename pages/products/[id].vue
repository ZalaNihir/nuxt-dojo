<template>
    <div class="container">
        <ProductDetail :product="product" />
    </div>
</template>

<script setup>
const { id } = useRoute().params
const uri = 'https://fakestoreapi.com/products/' + id

// fetch data

const { data:product } = await useFetch(uri)
definePageMeta({
  layout: 'products',
});
</script>

<style scoped>
</style>