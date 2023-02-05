<script setup lang="ts">
import { XiCi } from "../services/Yijing";
import { useRoute } from "vue-router";
const route = useRoute();

let index = 0;
if (Array.isArray(route.params.id)) {
  index = parseInt(route.params.id[0]);
} else {
  index = parseInt(route.params.id);
}
const { subtitle, content } = XiCi.content[index - 1];
const title = XiCi.title + subtitle;
</script>

<template>
  <h1>{{ title }}</h1>

  <p class="indent" v-for="(item, index) in content" v-bind:key="index">
    {{ item }}
  </p>
</template>
