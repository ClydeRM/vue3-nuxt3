<template>
    <div class="card text-center">
        <h2>Home Page</h2>
        <p>Nice to see you</p>
        <div class="text-xl my-7 justify-center flex">
            <p class="font-bold text-gray-500 m-4 truncate">Now USD to EUR:</p>
            <p class="font-bold text-gray-500 m-4 truncate">
                {{ currencyPo.EUR.value }}
            </p>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { CurrencyPo } from '~/composables/constant/CurrencyConstant.js';

export default defineComponent({
    async setup() {
        const { data } = await useFetch('/api/currency/EUR');
        const currencyPo = data.value as CurrencyPo;
        return {
            currencyPo,
        }
    }
})
</script>

<style scoped>
h2 {
    margin-bottom: 20px;
    font-size: 36px;
}

p {
    margin: 20px 0;
}
</style>
