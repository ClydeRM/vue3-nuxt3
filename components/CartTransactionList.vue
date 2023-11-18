<template>
    <div>
        <h3>List</h3>
        <ul class="cart-list">
            <li class="minus">
                Cash <span>-$400</span> <button class="cart-delete-btn"></button>
            </li>
            <li class="plus">
                PayCheck <span>+$400</span> <button class="cart-delete-btn"></button>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {


        return {}
    }
})
</script>

<style scoped>
</style>
