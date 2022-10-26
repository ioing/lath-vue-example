<script setup lang="ts">
</script>
<script lang="ts">
const buttons = document.querySelectorAll(".menu__item");

console.log(87, buttons)

</script>

<template>
  <div class="menu">
    <ul>
      <li to-applet="home">Home</li>
      <li to-applet="tab1">Tab1</li>
      <li to-applet="tab2">Tba2</li>
      <li to-applet="tab3">Tab3</li>
    </ul>
  </div>
</template>

<style scoped>
.menu {
  position: fixed;
  z-index: 99;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0;
  display: flex;
  height: 60px;
  user-select: none;
  align-items: center;
  padding: 0 12px;
  padding-bottom: calc(4px + constant(safe-area-inset-bottom));
  padding-bottom: calc(4px + env(safe-area-inset-bottom));
  justify-content: center;
  background-color: rgba(255, 255, 255, .85);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  backdrop-filter: saturate(180%) blur(20px);
  border-top: 0.5px solid rgba(0, 0, 0, .1);
  -webkit-tap-highlight-color: transparent;
}
.menu ul {
  display: flex;
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
}
.menu li {
  flex: 1;
  margin: 1px;
  border: 1px solid #000;
  background-color: #f5f5f5;
}

</style>
