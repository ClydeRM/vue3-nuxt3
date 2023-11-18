<template>
    <div>
        <h3>Add new transaction</h3>
        <form id="form">
            <div class="form-control">
                <label for="text">Text</label>
                <input type="text" id="text" placeholder="Enter text..." />
            </div>
            <div class="form-control">
                <!-- <label for="amount">
                    Amount <br />
                    (negative - expense, positive - income)\
                </label> -->
                <label for="amount"></label>
                <input type="text" id="amount" placeholder="Enter amount..." />
            </div>
            <button class="cart-btn">Add transaction</button>
        </form>
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
