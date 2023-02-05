<script setup lang="ts">
import { XuGua } from "../services/Yijing";
const { title, content } = XuGua;
</script>

<template>
  <h1>{{ title }}</h1>

  <p v-for="(t, i) in content" v-bind:key="i">
    {{ t }}
  </p>
</template>
