<template>
    <div>
        <header class="shadow-sm bg-white">
            <nav class="container mx-auto p-4 flex justify-between border-t-2">
                <NuxtLink to="/" class="font-bold">Vue Practice</NuxtLink>
                <ul class="flex gap-4">
                    <li>
                        <NuxtLink to="/" class="link">Home</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/about" class="link">About</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/products" class="btn">Merchandise</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/cart" class="btn">Cart</NuxtLink>
                    </li>
                </ul>
            </nav>
        </header>

        <!-- sub view -->
        <div class="container mx-auto p-4">
            <slot />
        </div>
    </div>
</template>

<style scoped>
.router-link-exact-active {
    color: #12b488;
}
</style>
