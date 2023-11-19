<template>
    <div>
        <h3>Product List</h3>
        <ul class="cart-list">
            <li v-for="item in transactions" 
                :key="item.id.toString()"
                :class="+item.price < 0 ? 'minus' : 'plus'">
                {{ item.title }} <span>${{ item.price }}</span> <button class="cart-delete-btn"></button>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Product } from '~/composables/constant/Product';

export default defineComponent({
     props: {
        transactions:  {
            type: Array as () => Array<Product>,
            required: true,
        },
    },
    setup(props) {
        const transactions = props.transactions;

        return { transactions }
    }
})
</script>

<style scoped>
</style>
