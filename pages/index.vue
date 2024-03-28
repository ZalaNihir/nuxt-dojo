<template>
    <div>
        <header>
            <NuxtLink to="/">Site Title</NuxtLink>
            <ul>
                <li>
                    <NuxtLink to="/">Home</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/about">About</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/products">Products</NuxtLink>
                </li>
            </ul>
        </header>
        <h1>Home Page</h1>
        <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae,
            optio sed? Temporibus dolore dignissimos corporis magnam non adipisci
            exercitationem deleniti ratione facere odit, minus mollitia nesciunt
            praesentium assumenda est a.
        </p>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped>
h2 {
    margin-bottom: 30px;
    font-size: 36px;
}

p {
    margin: 20px 0;
}
</style>
