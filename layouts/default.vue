<template>
    <div>
        <header>
            <nav>
                <NuxtLink to="/">Vue Practice</NuxtLink>
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
            </nav>
        </header>
    </div>

    <!-- sub view -->
    <div>
        <slot />
    </div>
</template>

<style scoped>
.router-link-exact-active {
    color: #12b488
}
</style>
