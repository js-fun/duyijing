<script setup lang="ts">
import { ZaGua } from "../services/Yijing";
const { title, content } = ZaGua;
</script>

<template>
  <h1>{{ title }}</h1>

  <p v-for="(t, i) in content" v-bind:key="i">
    {{ t }}
  </p>
</template>
