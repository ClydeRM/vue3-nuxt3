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
            transactions:[],
        });

        provide(user, useData);

        return {
            user,
            useData,
        }
    }
})
</script>
