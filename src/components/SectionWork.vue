<script setup lang="ts">
import { work } from "../data/resume.json";
</script>

<template>
  <section>
    <h2>Work Experience</h2>
    <ul>
      <li v-for="job in work" :key="job.name">
        <h3>{{ job.position }}</h3>
        <p>{{ job.startDate }} - {{ job.endDate }}</p>
        <p>{{ job.summary }}</p>
        <ul>
          <li v-for="task in job.highlights" :key="task">
            {{ task }}
          </li>
        </ul>
      </li>
    </ul>
  </section>
</template>
