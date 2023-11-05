<template>
    <div>
        <h2>Product</h2>
        <p>Nice to see you</p>
    </div>
</template>

<script setup lang="ts">
import { definePageMeta } from '#imports';

definePageMeta({ layout: 'products' })
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
