<template>
    <div class="cart-body">
        <CartHeader />
        <div class="cart-container">
            <CartBalance :total="+total" />
            <CartExpenses :income="+income" :expense="+expense" />
            <CartTransactionList :transactions="transactions" @deleteProduct="handleDeleteProductEvent" />
            <CartTransaction @addProduct="handleAddProductEvent" />
        </div>
    </div>
</template>

<script lang="ts">
import { user } from '~/app.vue';
import {
    Product
} from '~/composables/constant/Product';
import { generateUniqueId } from '~/composables/helper/generateUniqueId';

export default defineComponent({
    layout: 'cart',
    setup() {

        const useData = inject<{ transactions: Product[] }>(user);
        const transactions = ref(useData?.transactions || [] as Product[]);

        const total = computed(() => {
            return transactions.value.reduce((acc, trans) => {
                return acc + parseInt(trans.price);
            }, 0);
        });
        const income = computed(() => {
            return transactions.value.filter((transaction) => parseInt(transaction.price) < 0)
                .reduce((acc, trans) => {
                    return acc + parseInt(trans.price);
                }, 0)
                .toFixed(2);
        });
        const expense = computed(() => {
            return transactions.value.filter((transaction) => parseInt(transaction.price) > 0)
                .reduce((acc, trans) => {
                    return acc + parseInt(trans.price);
                }, 0)
                .toFixed(2);
        });

        const handleAddProductEvent = (product: Product) => {
            product.key = generateUniqueId();
            transactions.value.push(product);
            console.log(transactions.value);

            saveTransactionsToLocalStorage();
        }

        const handleDeleteProductEvent = (key: string) => {
            transactions.value = transactions.value.filter((transaction) => transaction.key !== key);

            saveTransactionsToLocalStorage();
            useNuxtApp().$toast.success("已刪除產品");
        }

        // Save transactions to local storage
        const saveTransactionsToLocalStorage = () => {
            localStorage.setItem('transactions', JSON.stringify(transactions.value));
        };

        onMounted(() => {
            const storage = localStorage.getItem('transactions');
            const savedTransactions = storage ? JSON.parse(storage) : null;

            if (savedTransactions) {
                transactions.value = savedTransactions;
            }
        });

        return {
            user,
            useData,
            total,
            income,
            expense,
            transactions,
            handleAddProductEvent,
            handleDeleteProductEvent,
        }
    }
})

</script>

<style scoped>
</style>
