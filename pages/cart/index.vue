<template>
    <div class="cart-body">
        <CartHeader />
        <div class="cart-container"> 
            <CartBalance :total="total" />
            <CartExpenses :income="+income" :expense="+expense"/>
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

        const useData = inject<{ transactions: Product[] }>(user);
        const transactions: Product[] = useData?.transactions || [];
        const total = computed(() => {
            return transactions.reduce((acc, trans) => {
                return acc + parseInt(trans.price);
            }, 0);
        });
        const income = computed(() => {
            return transactions.filter((transaction) => parseInt(transaction.price) > 0)
                               .reduce((acc, trans) => {
                                        return acc + parseInt(trans.price);
                                       }, 0)
                               .toFixed(2);
        });
        const expense = computed(() => {
            return transactions.filter((transaction) => parseInt(transaction.price) < 0)
                               .reduce((acc, trans) => {
                                   return acc + parseInt(trans.price);
                               }, 0)
                               .toFixed(2);
        });

        return {
            user,
            useData,
            total,
            income,
            expense,
            transactions,
        }
    }
})

</script>

<style scoped>
</style>
