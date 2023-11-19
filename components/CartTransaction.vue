<template>
    <div>
        <h3 class="text-xl text-center">ADD PRODUCT</h3>
        <form id="form" @submit.prevent="onSubmit">
            <div class="form-control">
                <label for="text">ProductId</label>
                <input type="text" id="productId" v-model="productId" placeholder="Enter text..." />
            </div>
            <div class="form-control">
                <label for="price">Price</label>
                <!-- <label for="amount">
                    Amount <br />
                    (negative - expense, positive - income)\
                </label> -->
                <input type="number" id="price" v-model="price" placeholder="Enter price..." />
            </div>
            <button class="cart-btn">Add</button>
        </form>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        const productId = ref('');
        const price = ref('');
        const onSubmit = () => {
            if (!productId.value || !price.value) {
                useNuxtApp().$toast.error("請輸入資料");
                return;
            }
            if (!productId.value.match(/[0-9]+/) || !price.value.match(/[0-9]+/)) {
                useNuxtApp().$toast.error("資料格式錯誤，只接受數字");
                return;
            }
            productId.value = '';
            price.value = '';
            useNuxtApp().$toast.success("加入購物車");
        };

        return { onSubmit, productId, price }
    }
})
</script>

<style scoped>
</style>
