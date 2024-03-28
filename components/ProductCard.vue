<template>
    <div class="card text-center border-2">
        <img :src="product.image" alt="product thumb" class="thumb">
        <p class="font-bold text-grey-500 m-4 truncate">{{ product.title }}</p>
        <NuxtLink :to="`/products/${product.id}`">
            <p class="p-3 bg-blue-400 my-4 :hover:bg-red-400 :hover:font-bold">View Details</p>
        </NuxtLink>
    </div>
</template>

<script setup>

const {product} = defineProps(['product'])

</script>

<style scoped>
.thumb{
    max-height: 120px;
    max-width: 70%;
    margin: 0 auto;
}
</style>