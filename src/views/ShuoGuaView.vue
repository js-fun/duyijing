<script setup lang="ts">
import { ShuoGua } from "../services/Yijing";
const { title, content } = ShuoGua;
</script>

<template>
  <h1>{{ title }}</h1>

  <p class="indent" v-for="(t, i) in content" v-bind:key="i">
    {{ t }}
  </p>
</template>
