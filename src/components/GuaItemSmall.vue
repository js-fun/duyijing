<script setup lang="ts">
import { getGuaData } from "../services/Yijing";

const props = defineProps<{ id: string }>();
const data = getGuaData(props.id);

const vo = {
  id: data.id,
  name: data.name,
  url: "/gua/" + data.name,
  nameClass: data.name.length === 1 ? "name" : "name2",
  title: data.name + "卦",
  yaos: data.id.split("").map((x: string) => (x === "1" ? "yang" : "yin")),
};
</script>
<template>
  <a :href="vo.url" class="gua-simple" :title="vo.title">
    <section class="gua small">
      <label :class="vo.nameClass">{{ vo.name }}</label>
      <span
        v-for="(item, index) in vo.yaos"
        :class="item"
        v-bind:key="index"
      ></span>
    </section>
  </a>
</template>

<style scoped>
.gua .yang,
.gua .yin {
  display: block;
}

.gua .name,
.gua .name2 {
  cursor: pointer;
}

.gua .yang {
  background-color: #ff1100;
}
.gua .yin {
  border-color: #000;
  border-left-style: solid;
  border-right-style: solid;
}

.gua.small .name {
  margin-bottom: 2px;
  font-size: 18px;
}
.gua.small .name2 {
  font-size: 18px;
}

.gua.small .yang,
.gua.small .yin {
  margin-bottom: 3px;
  height: 5px;
  width: 46px;
}

.gua.small .yin {
  border-left-width: 21px;
  border-right-width: 21px;
}
</style>
