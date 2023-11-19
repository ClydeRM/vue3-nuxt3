<template>
    <div class="cart-inc-exp-container">
        <div>
            <h4>Income</h4>
            <p id="money-plus" class="cart-money-plus">+${{ income }}</p>
        </div>
        <div>
            <h4>Expense</h4>
            <p id="money-plus" class="cart-money-minus">-${{ expense }}</p>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        income: {
            type: Number,
            required: true,
        },
        expense: {
            type: Number,
            required: true,
        },
    },
    setup(props) {
        const income: Number = props.income;
        const expense: Number = props.expense;

        return {}
    }
})
</script>

<style scoped>
</style>
