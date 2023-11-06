<template>
  <div>
    <!-- Nuxt Build in component for Header -->
    <Head>
      <Title>Vue Practice | {{ product.title }}</Title>
      <Meta name="description" :content="product.description" />
    </Head>
    <ProductDetail :product="product" />
  </div>
</template>

<script setup lang="ts">
import { Product } from '~/composables/constant/Product';

definePageMeta({ layout: 'products' });
const { id } = useRoute().params;

const uri = 'https://fakestoreapi.com/products/' + id;

// fetch Product
const { data } = await useFetch(uri, { key: id });
if (!data.value) {
  // fatal: true 使client/ server渲染時出現錯誤皆會拋出錯誤。
  throw createError({ statusCode: 404, statusMessage: 'Product not found.', fatal: true });
}
const product = data.value as Product;
</script>

<style scoped>
</style>
