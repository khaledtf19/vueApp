<template>
  <div class="nav-links" @click="clickLink">
    <RouterLink to="/" class="nav-item" @click="closeNav">Home</RouterLink>
    <RouterLink to="/login" class="nav-item" @click="closeNav">Login</RouterLink>
    <router-link to="/register" class="nav-item" @click="closeNav">Register</router-link>
  </div>
</template>

<script setup lang="ts">
const { closeNav } = defineProps<{ closeNav?: () => void }>()

function clickLink(event: Event) {
  event.stopPropagation()
}
</script>

<style scoped>
.nav-links {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 5rem 1rem;
  width: 100%;

}

.nav-item {
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
  width: 100%;
  background: #4b5563;
  padding: 0.7rem 1rem;
  text-align: center;
  border-radius: 1rem;
}

.router-link-active {
  border: 1px solid white;
}

@media (min-width: 1024px) {
  .nav-links {
    flex-direction: row;
    padding: 0px;
    gap: 3px;

  }

  .nav-item {
    background: white;
    color: black;
    font-size: 1rem;
    transition: background 500ms ease-out, color 300ms ease-out;
    border-radius: 0.3rem;
    min-width: 150px;
  }

  .nav-item:hover {
    background-color: #4b5563;
    color: white;
  }

  .router-link-active {
    background-color: #4b5563;
    color: white;

  }
}
</style>
