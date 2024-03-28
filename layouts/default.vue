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
        <div class="container">
            <slot />
        </div>
    </div>
</template>