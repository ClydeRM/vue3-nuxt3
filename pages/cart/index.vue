<template>
    <div class="cart-body">
        <CartHeader />
        <div class="cart-container">
            <CartBalance />
            <CartExpenses />
            <CartTransactionList :transactions="transactions" />
            <CartTransaction />
        </div>
    </div>
</template>

<script lang="ts">
import { user } from '~/app.vue';
import {
    Product
} from '~/composables/constant/Product';
definePageMeta({ layout: 'cart' })

export default defineComponent({
    setup() {

        const useData = inject<{ transaction: Product[] }>(user);
        const transactions: Product[] = useData?.transaction || [];

        return {
            user,
            useData,
            transactions,
        }
    }
})

</script>

<style scoped>
</style>
