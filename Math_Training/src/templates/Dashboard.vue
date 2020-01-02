<template>
  <div class="alert alert-primary">
    <h2>The End</h2>
    <hr>
    <h3>Total success: {{ total.totalSuccess }}</h3>  
    <h3>Total error: {{ total.totalError }}</h3>
    <hr>
    <button class="btn btn-danger" @click="$emit('toStart')">
      Back to Start
      </button>
  </div>
</template>

<script>
  export default {
    props: ['total']      
  }
</script>

<style scoped>
  .total {
    display: flex;
    justify-content: space-between;
  }

  .progress {
    width: 75%;
    margin: 10px;
  }
</style>