<template>
    <div class="home">
      <Counter/>
    </div>
  </template>
  
  <script>
  
  import Counter from '@/components/Counter.vue'
  
  export default {
    name: 'CounterView',
    components: {
      Counter
    }
  }
  </script>