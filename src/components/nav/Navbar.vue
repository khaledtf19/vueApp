<template>
  <nav class="nav-container">
    <div class="nav-web">
      <NavLinks />
    </div>

    <NavIcon />
    <div class="nav-mobile">
      <NavLinks />
    </div>
  </nav>
</template>

<script setup lang="ts">
import NavIcon from '../icons/navIcon.vue';
import NavLinks from './NavLinks.vue';

</script>

<style lang="css">
.nav-container {
  border-bottom: 1px solid gray;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-items: center;
  padding: 1rem 2rem;
}

.nav-mobile {
  position: absolute;
  z-index: 999;
  width: 100%;
  height: 100%;
  min-height: 80vh;
  background: gray;
  top: 100%;
  left: 0;
  right: 0;
}

.nav-web {
  display: none;
}
</style>
