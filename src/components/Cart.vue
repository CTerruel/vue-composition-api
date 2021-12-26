<script setup>
  import { computed } from 'vue'
  import { state, plusItem, minusItem } from '../stores/cart'

  const totalCart = computed(() => state.value.reduce((sum, item) => sum + item.price * item.quantity, 0))
</script>

<template>
  <div class="cart-list">
    <div class="cart-item" v-for="item in state" v-bind:key="item.id">
      <img width="50" v-bind:src="item.image" v-bind:alt="item.name" />
      <div>
        {{ item.quantity }}
        <button v-on:click="plusItem(item)">+</button>
        <button v-on:click="minusItem(item)">-</button>
      </div>
      <p>₹{{ item.price * item.quantity }}</p>
    </div>
    <div class="total">
      <h4>Total: ₹ {{ totalCart }}</h4>
    </div>
  </div>
</template>

<style scoped>
.cart-item {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.total {
  text-align: right;
}

.cart-list {
  border: 2px solid;
  padding: 10px;
}
</style>