<script setup lang="ts">
import { Y } from "../services/Yijing";
import { useRoute } from "vue-router";
import { transform } from "../services/Gua";
import GuaItem from "../components/GuaItem.vue";

const route = useRoute();

// may turn name to binary id.
const normalizeInput = (paramsKey: string | string[]): string => {
  // turns out `this.$route.params.id` has type `string | string[]`
  let key: string = "";
  if (Array.isArray(paramsKey)) {
    key = paramsKey[0];
  } else {
    key = paramsKey;
  }

  if (key.match(/[0-9-]+/)) {
    return key;
  } else {
    const xs = Y.filter((d) => key === d.name);
    if (xs.length === 1) {
      return xs[0].id;
    } else {
      console.error(`unable to find data from key ${key}`);
      return key;
    }
  }
};

// $document[0].title = guas.base.name + '卦';
const id = normalizeInput(route.params.id);
const guas = transform(id);
</script>

<template>
  <div class="gua-container">
    <h1>{{ guas.base.displayName }}</h1>
    <div class="row" :id="guas.base.kind">
      <GuaItem :id="guas.base.id" />
    </div>

    <div v-for="item in guas.xs" v-bind:key="item.id" :id="item.kind">
      <h2>
        <a :href="item.url">{{ item.displayName }}</a>
      </h2>

      <div class="row">
        <GuaItem :id="item.id" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.gua-container .row {
  border-top: 1px solid var(--color-border);
  padding-bottom: 20px;
  padding-top: 20px;
}
</style>
