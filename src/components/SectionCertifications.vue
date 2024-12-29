<script setup lang="ts">
import { certifications } from "../data/resume.json";
</script>

<template>
  <section>
    <h2>Certifications</h2>
    <ul>
      <li v-for="certification in certifications" :key="certification.name">
        <h3>{{ certification.name }}</h3>
        <p>{{ certification.issuer }}</p>
        <p>{{ certification.date }}</p>
        <a :href="certification.url" target="_blank">Verification link</a>
      </li>
    </ul>
  </section>
</template>
