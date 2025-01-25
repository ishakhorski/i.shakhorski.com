<script setup lang="ts">
const PROFILE_GITHUB = import.meta.env.VITE_PROFILE_GITHUB
const PROFILE_LINKEDIN = import.meta.env.VITE_PROFILE_LINKEDIN
</script>

<template>
  <footer class="app-footer">
    <a :href="PROFILE_LINKEDIN" target="_blank"> LinkedIn ↗ </a>
    <a :href="PROFILE_GITHUB" target="_blank"> GitHub ↗ </a>
  </footer>
</template>

<style>
.app-footer {
  display: flex;
  justify-content: end;
  gap: 0.75rem;
  padding: 1rem 2rem;
}

@media screen and (min-width: 48rem) {
  .app-footer {
    justify-content: start;
  }
}
</style>
