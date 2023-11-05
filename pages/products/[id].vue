<template>
  <div>
    <ProductDetail :product="product"/>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'products' });
const { id } = useRoute().params;

const uri = 'https://fakestoreapi.com/products/' + id;
type Product = {
  id: Number,
  title: String,
  price: String,
  category: String,
  description: String,
  image: String
};
// fetch Product
const { data } = await useFetch(uri, { key: id });
const product = data.value as Product;
</script>

<style scoped>
</style>
