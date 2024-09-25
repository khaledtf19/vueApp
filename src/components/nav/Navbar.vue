<template>
  <nav class="nav-container">

    <div class="nav-web" v-if="isOpen">
      <NavLinks />
    </div>
    <div class="nav-top">
      <NavIcon @click="toggleNave" class="nav-icon" />
    </div>


    <div class="nav-mobile" v-if="isOpen" @click="closeNav">
      <NavLinks :close-nav="closeNav" />
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import NavIcon from '../icons/navIcon.vue';
import NavLinks from './NavLinks.vue';

const isOpen = ref(false)
function toggleNave() {
  isOpen.value = !isOpen.value
}
function closeNav() {
  isOpen.value = false
}
</script>

<style lang="css">
.nav-container {
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-items: center;
  background: white;
}

.nav-top {
  padding: 1rem 2rem;
  border-bottom: 1px solid gray;
  width: 100%;
  display: flex;
  align-items: center;
  justify-items: center;
  z-index: 999999;
  background: white;
}

.nav-mobile {
  position: absolute;
  width: 100%;
  height: 100%;
  min-height: 91vh;
  background: rgba(3, 7, 18, 0.9);
  backdrop-filter: blur(3px);
  top: 100%;
  left: 0;
  right: 0;
  overflow: hidden;
  animation: a-fade 500ms;
  z-index: 9999999;
}


.nav-icon {
  padding: 1px;
  border-radius: 0.6rem;
  font-size: 3rem;
}

.nav-icon:hover,
.nav-icon:active {
  background: #e5e7eb;
}

.nav-web {
  display: none;
}

@keyframes a-fade {
  from {
    opacity: 0;
    transform: translateY(-50%);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (min-width: 1024px) {


  .nav-mobile {
    display: none;
  }

  .nav-web {
    display: flex;
    position: sticky;
    top: 0;
    left: 0;
  }

  .nav-top {
    padding: 0.3rem 2rem;
    z-index: auto;
  }


}
</style>
