<script setup lang="ts">
defineProps<{ msg: string }>()

</script>

<template>
  <div class="wrapper">
    <h1>{{ msg }}</h1>
  </div>
</template>

<style scoped>
.wrapper {
  margin: 0;
  padding-top: 20vh;
  padding-bottom: 20px;
  width: 100%;
}
h1 {
  color: #fff;
  font-size: 58px;
  height: 60px;
  width: 100%;
  text-align: center;
}
</style>
