<template>
  <div class="alert alert-primary">
    <h2>Finished Level {{ level + 1 }}</h2>
    <hr>
    <h3>Success: {{ stats.success }}</h3>
    <h3>Error: {{ stats.error }}</h3>
    <hr>
    <button class="btn btn-primary" @click="$emit('repeat')">Repeat</button>
    <button class="btn btn-primary" @click="$emit('nextLevel')">Next Level</button>
    <button class="btn btn-primary" @click="$emit('finish')">Finish</button>
  </div>
</template>

<script>
  export default {
    props: ['stats', 'level']
  }
</script>

<style scoped>

</style>