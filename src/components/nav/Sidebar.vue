<template>
  <aside
    :data-collapse="navStore.collapsed"
    class="w-72 data-[collapse=true]:w-16 min-h-screen sidebar bg-gray-900 p-3"
  >
    <div class="w-full flex flex-col justify-center text-white gap-5">
      <!-- <SidebarIcon -->
      <!--   @click="navStore.changeNav" -->
      <!--   class="w-10 text-3xl [[data-collapse=true]_&]:rotate-180 sidebar-icon text-white" -->
      <!-- /> -->
      <RouterLink to="/" class="flex gap-3"
        ><HomeIcon class="text-white text-3xl" />
        <span :class="{ 'w-0': navStore.collapsed }">Home</span></RouterLink
      >
      <RouterLink to="/login" class="flex gap-3"
        ><LoginIcon class="text-white text-3xl" />
        <span :class="{ 'w-0': navStore.collapsed }">Login</span></RouterLink
      >
      <RouterLink to="/register" class="flex gap-3"
        ><SignUpIcon class="text-white text-3xl" />
        <span
          class="linkText opacity-100"
          :class="{ 'hidden opacity-0': navStore.collapsed }"
          >Register</span
        ></RouterLink
      >
    </div>
  </aside>
</template>

<script setup lang="ts">
import { useNavStore } from "../../stores/navbar.ts";
import HomeIcon from "../icons/HomeIcon.vue";
import LoginIcon from "../icons/LoginIcon.vue";
import SignUpIcon from "../icons/SignUp.vue";

const navStore = useNavStore();
</script>
<style scoped>
.sidebar {
  transition: width 0.5s;
}
.linkText {
  transition-property: display opacity;
  transition-duration: 1s;
  transition-behavior: allow-discrete;
}
</style>
