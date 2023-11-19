<template>
    <div class="card">
        <div class="grid grid-cols-2 gap-10">
            <div class="p-7">
                <img :src="`${props.product.image}`" alt="product img" class="mx-auto my-7">
            </div>
            <div class="p-7">
                <h2 class="text-4xl my-7">{{ props.product.title }}</h2>
                <p class="text-xl my-7">Price -${{ props.product.price }}</p>
                <h3 class="font-bold border-b-2 mb-4 pb-2">Product description:</h3>
                <p class="mb-7">{{ props.product.description }}</p>
                <button class="btn flex" @click="addProduct">
                    <i class="material-icons mr-2">add_shopping_cart</i>
                    <span>Add to cart</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Product } from '~/composables/constant/Product';

export default defineComponent({
    props: {
        product: {
            type: Product,
            required: true,
        },
    },
    emits: ['addProduct'],
    setup(props, { emit }) {

        const addProduct = () => {
            emit('addProduct', props.product);
        }

        return { props, addProduct }
    }
})
</script>

<style scoped>
img {
    max-width: 400px;
}
</style>
