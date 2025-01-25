<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import AppContent from '@/components/AppContent.vue'
</script>

<template>
  <AppHeader />

  <AppContent>
    <section id="about-me" class="app-section">
      <h2 v-motion :duration="600" :initial="{ opacity: 0, y: 12 }" :visible-once="{ opacity: 1, y: 0 }">About me</h2>

      <p>
        Hey! I'm a passionate <b>Software Engineer</b> specializing in building <b>web applications</b>, delivering
        <b>well-accessable UI</b> and creating <b>high-quality UX</b>. With a focus on <b>problem-solving</b> and
        <b>innovation</b>, I'm driven by <b>collaboration</b>, continuous <b>improvement</b>, and a <b>passion</b> for
        building solutions that make an <b>impact</b>.
      </p>
    </section>

    <figure id="inspiration">
      <picture>
        <source srcset="@/assets/images/sunset-480.jpg" media="(max-width: 480px)" />
        <source srcset="@/assets/images/sunset-800.jpg" media="(max-width: 800px)" />
        <img
          src="@/assets/images/sunset-1024.jpg"
          alt="Silhouette of a tree at sunset with a colorful gradient sky"
          width="100%"
        />
      </picture>
      <figcaption>Inspiration</figcaption>
    </figure>
  </AppContent>

  <AppFooter />
</template>

<style>
#app {
  max-width: 1024px;
  min-height: 100dvh;
  margin: 0 auto;
}

.app-section h2 {
  font-size: 18px;
  font-weight: 300;
  color: var(--color-gray);
}

#about-me,
#inspiration {
  margin-bottom: 2rem;
}

@media screen and (min-width: 40rem) {
  #about-me,
  #inspiration {
    margin-bottom: 4rem;
  }
}
</style>
