<script setup lang="ts">
const PROFILE_GITHUB = import.meta.env.VITE_PROFILE_GITHUB
const PROFILE_LINKEDIN = import.meta.env.VITE_PROFILE_LINKEDIN
</script>

<template>
  <header class="app-header">
    <h1>Ivan Shakhorski</h1>

    <p>Warsaw, <span>Poland 📍</span></p>
  </header>

  <main class="app-content">
    <section class="app-section">
      <h2 v-motion :duration="600" :initial="{ opacity: 0, y: 12 }" :visible-once="{ opacity: 1, y: 0 }">About me</h2>

      <p>
        Hey! I'm a passionate <b>Software Engineer</b> specializing in building <b>web applications</b>, delivering
        <b>well-accessable UI</b> and creating <b>high-quality UX</b>. With a focus on <b>problem-solving</b> and
        <b>innovation</b>, I'm driven by <b>collaboration</b>, continuous <b>improvement</b>, and a <b>passion</b> for
        building solutions that make an <b>impact</b>.
      </p>
    </section>
  </main>

  <footer class="app-footer">
    <a :href="PROFILE_LINKEDIN" target="_blank"> LinkedIn ↗ </a>
    <a :href="PROFILE_GITHUB" target="_blank"> GitHub ↗ </a>
  </footer>
</template>

<style>
#app {
  max-width: 1024px;
  min-height: 100dvh;
  margin: 0 auto;
}

.app-header {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem 2rem;
}

@media screen and (min-width: 489px) {
  .app-header {
    flex-direction: row;
    align-items: center;
  }
}

.app-header h1 {
  font-size: 24px;
}

.app-header p {
  font-size: 16px;
  color: var(--color-gray);
}

.app-header p span {
  white-space: nowrap;
}

.app-content {
  padding: 1rem 2rem;
}

.app-footer {
  display: flex;
  justify-content: end;
  gap: 0.75rem;
  padding: 1rem 2rem;
}

.app-section h2 {
  font-size: 18px;
  font-weight: 300;
  color: var(--color-gray);
}
</style>
