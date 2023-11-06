<template>
    <div class="card text-center">
        <h2>About Page</h2>
            <p>Nice to see you</p>
        <div class="text-xl my-7 justify-center">
            <p class="mb-7">{{ data?.message }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">

const { data } = await useFetch('/api/userApi?role=employee', {
    method: 'POST',
    body: {
        age: 20,
        name: 'John'
    }
});
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
