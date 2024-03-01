<script setup lang="ts">
import { useRoute } from "vue-router";
import type { SixtyFourGua } from "@freizl/yijing";
import { Y } from "../services/Yijing";
const route = useRoute();

type GuaDocViewObject = {
  id: string;
  name: string;
  displayName: string;
  url: string;
  text: Array<string>;
};

const t = route.params.type;
const id = route.params.id;
let pageSubTitle = "";
let data = [];
let startIndex = 1;

if (id === "1") {
  pageSubTitle = "上";
  data = Y.slice(0, 30);
  startIndex = 1;
} else {
  startIndex = 31;
  pageSubTitle = "下";
  data = Y.slice(30);
}

let pageTitle = "";
let fetchText = (d: SixtyFourGua) => [d.gua_ci];
if (t === "yijing") {
  pageTitle = `易传${pageSubTitle}`;
  fetchText = (d) => [d.gua_ci, ...d.yao_ci];
} else if (t === "tuan") {
  pageTitle = `彖传${pageSubTitle}`;
  fetchText = (d) => [d.tuan_ci];
} else if (t === "xiang") {
  pageTitle = `象传${pageSubTitle}`;
  fetchText = (d) => [d.da_xiang, ...d.xiao_xiang];
}

const docs: Array<GuaDocViewObject> = data.map((d) => {
  return {
    id: d.id,
    name: d.name,
    displayName: d.symbol + d.name,
    url: "/gua/" + d.name,
    text: fetchText(d),
  };
});
</script>

<template>
  <h1>{{ pageTitle }}</h1>
  <div class="doc">
    <ol :start="startIndex">
      <li v-for="item in docs" v-bind:key="item.id">
        <a :href="item.url" class="name">
          {{ item.displayName }}
        </a>
        <ul>
          <li v-for="(v, index) in item.text" v-bind:key="index">
            {{ v }}
          </li>
        </ul>
      </li>
    </ol>
  </div>
</template>

<style scoped>
.doc .name {
  font-size: var(--font-size-secondary-title);
}
</style>
