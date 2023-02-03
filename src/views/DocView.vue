<script setup lang="ts">
import { useRoute } from "vue-router";
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
let fetchText = function () {};
if (t === "yijing") {
  pageTitle = `易經${pageSubTitle}`;
  fetchText = (d) => [d.gua_ci, ...d.yao_ci];
} else if (t === "tuan") {
  pageTitle = `彖傳${pageSubTitle}`;
  fetchText = (d) => [d.tuan_ci];
} else if (t === "xiang") {
  pageTitle = `象傳${pageSubTitle}`;
  fetchText = (d) => [d.da_xiang, ...d.xiao_xiang];
}

const docs: Array<GuaDocViewObject> = data.map((d) => {
  return {
    id: d.id,
    name: d.name,
    displayName: d.name + "卦",
    url: "/gua/" + d.name,
    text: fetchText(d),
  };
});
</script>

<template>
  <main>
    <h1>{{ pageTitle }}</h1>
    <div class="shiyi-doc">
      <ol :start="startIndex">
        <li v-for="item in docs" v-bind:key="item.id">
          <a :title="item.displayName" :href="item.url" class="name">
            {{ item.name }}
          </a>
          <ul>
            <li v-for="(v, index) in item.text" v-bind:key="index">
              {{ v }}
            </li>
          </ul>
        </li>
      </ol>
    </div>
  </main>
</template>

<style></style>
