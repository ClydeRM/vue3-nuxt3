<template>
    <div>
        <h3 class="text-xl text-center">ADD PRODUCT</h3>
        <form id="form">
            <div class="form-control">
                <label for="text">ProductId</label>
                <input type="text" id="productId" v-model="productId" placeholder="Enter id..." />
            </div>
            <div class="form-control">
                <label for="text">Product Title</label>
                <input type="text" id="title" v-model="title" disabled />
            </div>
            <div class="form-control">
                <label for="price">Price</label>
                <input type="number" id="price" v-model="price" placeholder="Price..." disabled />
            </div>
        </form>
        <button v-if="price !== '' && title !== ''" class="cart-btn" @click="onSubmit">Add</button>
        <button v-if="price === '' && title === ''" class="cart-btn" @click="onSearch">Search</button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { Product } from '~/composables/constant/Product';

export default defineComponent({
    emits: ['addProduct'],
    // @ts-ignore
    setup(props, { emit }) {
        const productId = ref('');
        const price = ref('');
        const title = ref('');
        let product: Product;
        const fetchData = async (id: string): Promise<Product | null > => {
            const uri = 'https://fakestoreapi.com/products/' + id;

            // fetch Product
            const { data } = await useFetch(uri, { key: id });
            if (!data.value) {
                useNuxtApp().$toast.error("找不到此商品");
                return null;
            }
            return data.value as Product;
        };
        const checkInput = (): Boolean => {
            if (!productId.value) {
                useNuxtApp().$toast.error("請輸入資料");
                return false;
            }
            if (!productId.value.match(/[0-9]+/)) {
                useNuxtApp().$toast.error("資料格式錯誤，只接受數字");
                return false;
            }
            return true;
        };
        const clearInput = () => {
            productId.value = '';
            price.value = '';
            title.value = '';
            useNuxtApp().$toast.success("加入購物車");
        };

        const onSearch = async () => {
            if (!checkInput()) {
                return;
            }

            const response = await fetchData(productId.value);
            if (!response) {
                return;
            }
            product = response;

            price.value = product.price;
            title.value = product.title;
            useNuxtApp().$toast.info("找到產品囉～");
        }

        const onSubmit = async () => {
            if (!checkInput()) {
                return;
            }

            emit('addProduct', product);

            clearInput();
        };

        return { onSubmit, onSearch, productId, title, price }
    }
})
</script>

<style scoped>
</style>
