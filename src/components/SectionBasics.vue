<script setup lang="ts">
import { basics } from "../data/resume.json";
</script>

<template>
  <h1>{{ basics.name }}</h1>

  <figure>
    <figcaption>Contacts</figcaption>
    <ul>
      <li>
        <a :href="'tel:' + basics.phone">{{ basics.phone }}</a>
      </li>
      <li>
        <a :href="'mailto:' + basics.email">{{ basics.email }}</a>
      </li>
    </ul>
  </figure>

  <figure>
    <figcaption>Networks</figcaption>
    <ul>
      <li v-for="profile in basics.profiles" :key="profile.network">
        <a :href="profile.url" target="_blank">{{ profile.network }}</a>
      </li>
    </ul>
  </figure>

  <section>
    <h2>Summary</h2>
    <p>{{ basics.summary }}</p>
  </section>
</template>
