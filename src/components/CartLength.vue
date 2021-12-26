<script setup>
  import { computed } from 'vue'
  import { state } from '../stores/cart'

  const totalCart = computed(() => state.value.reduce((sum, item) => sum + item.quantity, 0))
</script>

<template>
  <p>
    There are <strong>{{ state.length }}</strong> types of items in your cart
  </p>
  <p>
    Total items:
    <strong> {{ totalCart }}</strong>
  </p>
</template>