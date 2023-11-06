<template>
    <div>
        <div class="grid grid-cols-4 gap-5">
            <div v-for="item in productList">
                <ProductCard :product="item" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
// 設定 Custom Layout
definePageMeta({ layout: 'products' });
type Product = {
    id: number,
    title: string,
    price: string,
    category: string,
    description: string,
    image: string
};

// 取得資料 在client render或 server pre-render時
const { data: productList } = await useFetch('https://fakestoreapi.com/products');
// custom header and tab tag
// useHead({
//     title: 'Merchandise',
//     meta: [
//         { name: 'description', content: 'Merchandise' }
//     ]
// })
// Nuxt可以在 client/ server執行，除非額外設定，切記不要在程式中呼叫 windows/browser 屬性/函式
</script>

<style scoped>
</style>
