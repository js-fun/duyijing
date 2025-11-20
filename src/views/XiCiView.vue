<script setup lang="ts">
import { XiCi } from "../services/Yijing";
import { useRoute } from "vue-router";
const route = useRoute();

const resolveIndex = (value: string | string[] | undefined): number => {
  const rawValue = Array.isArray(value) ? value[0] : value;
  const parsed = rawValue ? parseInt(rawValue, 10) : NaN;
  if (!Number.isFinite(parsed) || parsed <= 0) {
    return 1;
  }
  return parsed;
};

const index = resolveIndex(route.params.id);
const fallbackSection = XiCi.content[0];
const section = XiCi.content[index - 1] ?? fallbackSection;
if (!section) {
  throw new Error("XiCi data is not available");
}
const { subtitle, content } = section;
const title = XiCi.title + subtitle;
</script>

<template>
  <h1>{{ title }}</h1>

  <p class="indent" v-for="(item, index) in content" v-bind:key="index">
    {{ item }}
  </p>
</template>
