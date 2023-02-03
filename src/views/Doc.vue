<script lang="ts">
import Y from "@freizl/yijing/zh-TW/64gua.json";

export default {
  data() {
    const t = this.$route.params.type;
    const id = this.$route.params.id;
    let pageSubTitle = "";
    let data = [];
    let pageTitle = "";
    let startIndex = 1;
    let docs = [];

    if (id === "1") {
      pageSubTitle = "上";
      data = Y.slice(0, 30);
      startIndex = 1;
    } else {
      startIndex = 31;
      pageSubTitle = "下";
      data = Y.slice(30);
    }

    if (t === "yijing") {
      pageTitle = `易經${pageSubTitle}`;
      docs = data.map((d) => {
        return {
          name: d.name,
          displayName: d.name + "卦",
          url: "/gua/" + d.name,
          text: [].concat(d.gua_ci).concat(d.yao_ci),
        };
      });
    } else if (t === "tuan") {
      pageTitle = `彖傳${pageSubTitle}`;
      docs = data.map((d) => {
        return {
          name: d.name,
          displayName: d.name + "卦",
          url: "/gua/" + d.name,
          text: [].concat(d.tuan_ci),
        };
      });
    } else if (t === "xiang") {
      pageTitle = `象傳${pageSubTitle}`;
      docs = data.map((d) => {
        return {
          name: d.name,
          displayName: d.name + "卦",
          url: "/gua/" + d.name,
          text: [].concat(d.da_xiang).concat(d.xiao_xiang),
        };
      });
    }

    return {
      pageTitle,
      startIndex,
      docs,
    };
  },
};
</script>

<template>
  <main>
    <h1>{{ pageTitle }}</h1>
    <div class="shiyi-doc">
      <ol :start="startIndex">
        <li v-for="item in docs">
          <a
            :title="item.displayName"
            :href="item.url"
            class="name"
            >{{ item.name }}</a
          >
          <ul>
            <li v-for="v in item.text">
              {{ v }}
            </li>
          </ul>
        </li>
      </ol>
    </div>
  </main>
</template>

<style></style>
