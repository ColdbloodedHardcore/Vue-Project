<template>
  <div class="alert alert-secondary">
    <h3>Are You Ready?</h3>
    <button class="btn btn-success" @click="$emit('onStart')">
      Start
      </button>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        
      }
    }
  }
</script>

<style scoped>
  .alert {
    text-align: center;
  }

  h3, .btn {
    margin: 30px 0;
  }
</style>
