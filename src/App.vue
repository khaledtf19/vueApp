<script setup lang="ts">
import Navbar from "./components/nav/Navbar.vue";
</script>

<template>
  <div class="layout-contianer">
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
</style>
