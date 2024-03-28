<template>
    <div class="container">
        <NuxtLink to="/products" class="bg-blue-400 float-end p-3 text-white ">Back</NuxtLink>
        <h3>{{ product.title }}</h3>
        <p>{{ product.id }}</p>
        <p>{{ product.price }}</p>
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