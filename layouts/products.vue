<template>
    <div>
        <header class="shadow-sm bg-white">
            <ul class="flex">
                <li>
                    <nav class="container mx-auto p-4">
                        <NuxtLink to="/" class="font-bold">Home</NuxtLink>
                    </nav>
                </li>
                <li>
                    <nav class="container mx-auto p-4">
                        <NuxtLink to="/cart" class="font-bold">Cart</NuxtLink>
                    </nav>
                </li>
            </ul>
        </header>
        <div class="container mx-auto p-4">
            <slot />
        </div>
        <footer class="container mx-auto p-4 flex justify-between border-t-2">
            <ul class="flex gap-4">
                <li>
                    <NuxtLink to="/">Home</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/about">About</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/cart">Cart</NuxtLink>
                </li>
            </ul>
        </footer>
    </div>
</template>

<style scoped>
.router-link-exact-active {
    color: #12b488;
}
</style>
