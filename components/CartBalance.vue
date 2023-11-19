<template>
    <div>
        <h4>Your Balance</h4>
        <h1 id="balance" class="text-2xl my-7">${{ total }}</h1>
    </div>
</template>

<script lang="ts">
export default defineComponent({
    props: {
        total: {
            type: Number,
            required: true,
        },
    },
    setup(props) {
        const total: number = props.total > 0 ? -props.total : props.total;

        return { total }
    }
})
</script>

<style scoped>
</style>
