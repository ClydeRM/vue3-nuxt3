<template>
    <div>
        <h3>Product List</h3>
        <ul class="cart-list">
            <li v-for="item in props.transactions" :key="item.id.toString()" :class="+item.price < 0 ? 'minus' : 'plus'">
                <span class="font-bold truncate">{{ item.title }}</span>
                <span>${{ item.price }}</span> 
                <button class="cart-delete-btn" @click="deleteProduct(item.key)"></button>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Product } from '~/composables/constant/Product';

export default defineComponent({
    props: {
        transactions: {
            type: Array as () => Array<Product>,
            required: true,
        },
    },
    emits: ['deleteProduct'],
    setup(props, {emit}) {

        const deleteProduct = (key: string) => {
            emit('deleteProduct', key);
        }

        return { props , deleteProduct }
    }
})
</script>

<style scoped>
</style>
