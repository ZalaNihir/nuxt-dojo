<template>
    <div>
        <h1>About Page</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, optio sed? Temporibus dolore dignissimos corporis magnam non adipisci exercitationem deleniti ratione facere odit, minus mollitia nesciunt praesentium assumenda est a.</p>
    </div>
    <div>
        <p>{{ data }}</p>
    </div>
</template>

<script setup lang="ts">
const { data } = await useFetch('api/ninja?name=nihir',{
    method: 'post',
    body:{
        age:30
    }
})
</script>

<style scoped>
h2{
    margin-bottom: 30px;
    font-size: 36px;
}
p{
    margin: 20px 0;
}
</style>