<template>
    <div>
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>

<script lang="ts">

export const user = Symbol('user');
export default defineComponent({
    async setup() {
        const useData = reactive({
            transactions: [
                { id: 1, title: 'Product1', price: 1, category: 'product', description: 'Product', image: '' },
                { id: 2, title: 'Product2', price: -2, category: 'product', description: 'Product', image: '' },
                { id: 3, title: 'Product3', price: 3, category: 'product', description: 'Product', image: '' },
                { id: 4, title: 'Product4', price: -4, category: 'product', description: 'Product', image: '' },
            ]
        });

        provide(user, useData);

        return {
            user,
            useData,
        }
    }
})
</script>
