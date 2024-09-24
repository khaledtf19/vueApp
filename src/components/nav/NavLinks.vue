<template>
  <div class="nav-links">
    <RouterLink to="/" class="nav-item">Home</RouterLink>
    <RouterLink to="/login" class="nav-item">Login</RouterLink>
    <RouterLink to="/register" class="nav-item">Register</RouterLink>
  </div>
</template>

<style scoped>
.nav-links {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 2rem;
  width: 100%;
}

.nav-item {
  color: black;
  text-decoration: none;
  font-size: 1.5rem;
}
</style>
