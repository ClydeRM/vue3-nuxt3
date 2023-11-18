<template>
    <div class="cart-body">
        <CartHeader />
        <div class="cart-container">
            <CartBalance />
            <CartExpenses />
            <CartTransactionList />
            <CartTransaction />
        </div>
    </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'cart' })
</script>

<style scoped>
</style>
