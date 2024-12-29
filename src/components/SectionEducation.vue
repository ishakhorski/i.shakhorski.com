<script setup lang="ts">
import { education } from "../data/resume.json";
</script>

<template>
  <section>
    <h2>Education</h2>
    <ul>
      <li v-for="item in education" :key="item.institution">
        <h3>{{ item.studyType }} in {{ item.area }}</h3>
        <p>{{ item.institution }}</p>
        <p>{{ item.startDate }} - {{ item.endDate }}</p>
      </li>
    </ul>
  </section>
</template>
