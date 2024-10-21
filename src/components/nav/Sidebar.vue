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
      <RouterLink
        to="/"
        class="flex gap-3 link_container"
        :class="{ link_container_open: !navStore.collapsed }"
        ><HomeIcon class="w-5 flex-shrink-0" />
        <span class="grid_text flex-shrink">Home</span></RouterLink
      >
      <RouterLink
        to="/login"
        class="flex gap-3 link_container w-full"
        :class="{ link_container_open: !navStore.collapsed }"
        ><LoginIcon class="w-5 flex-shrink-0" />
        <span class="grid_text flex-shrink">Login</span></RouterLink
      >
      <RouterLink
        to="/register"
        class="flex gap-3 link_container"
        :class="{ link_container_open: !navStore.collapsed }"
        ><SignUpIcon class="w-5" />
        <span class="grid_text flex-shrink">Register</span></RouterLink
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
.link_container {
  width: 2rem !important;
  height: 2rem !important;
  transition-property: width, height, padding;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.15s;
  overflow: hidden;
  display: flex;
  align-items: center;
}

.link_container_open {
  width: 100% !important;
}
svg {
  flex-shrink: 0;
  width: 2rem;
  height: 2rem;
}
</style>
