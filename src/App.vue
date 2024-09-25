<script setup lang="ts">
import Navbar from "./components/nav/Navbar.vue";
import Toast from 'primevue/toast';
</script>

<template>
  <div class="layout-contianer">
    <Toast />
    <Navbar />
    <main>
      <router-view />
    </main>
  </div>
</template>

<style scoped>
.layout-contianer {
  width: 100%;
}

main {
  display: flex;
  flex-direction: column;
  padding: 1rem 5px;
  align-items: center;
  min-height: 90vh;
}
</style>
