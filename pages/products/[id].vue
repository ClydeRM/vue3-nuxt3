<template>
  <div>
    <p>Product details for {{ id }}</p>
    <p>On sale</p>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
const { id } = useRoute().params;
</script>

<style scoped></style>
