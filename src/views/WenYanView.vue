<script setup lang="ts">
import { WenYan } from "../services/Yijing";
const { title, content } = WenYan;
</script>

<template>
  <h1>{{ title }}</h1>

  <section v-for="(c, i) in content" v-bind:key="i">
    <h2>{{ c.subtitle }}</h2>
    <p class="indent" v-for="(c2, i2) in c.content" v-bind:key="i2">
      {{ c2 }}
    </p>
  </section>
</template>
