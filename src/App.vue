<script setup lang="ts">
import Navbar from "./components/nav/Navbar.vue";
import Sidebar from "./components/nav/Sidebar.vue";
import Toast from "primevue/toast";
</script>

<template>
  <div class="layout-contianer flex">
    <Toast />
    <Sidebar class="hidden md:block" />
    <div class="flex flex-col w-full bg-gray-200">
      <Navbar />
      <main class="bg-gray-200">
        <router-view />
      </main>
    </div>
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
