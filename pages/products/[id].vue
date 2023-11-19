<template>
  <div>
    <!-- Nuxt Build in component for Header -->

    <Head>
      <Title>Vue Practice | {{ product.title }}</Title>
      <Meta name="description" :content="product.description" />
    </Head>
    <ProductDetail :product="product" @addProduct="handleAddProductEvent" />
  </div>
</template>

<script setup lang="ts">
import { user } from '~/app.vue';
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

const useData = inject<{ transactions: Product[] }>(user);
const transactions = ref(useData?.transactions || [] as Product[]);

const handleAddProductEvent = (product: Product) => {
  transactions.value.push(product);
  saveTransactionsToLocalStorage();
  useNuxtApp().$toast.success("加入購物車");
}
const saveTransactionsToLocalStorage = () => {
  localStorage.setItem('transactions', JSON.stringify(transactions.value));
};
</script>

<style scoped>
</style>
