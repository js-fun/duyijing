// Visual representation of 8gua

<script setup lang="ts">
 import { getEightGuaData } from "../services/Yijing";

 const props = defineProps<{ id: string }>();
 const data = getEightGuaData(props.id);

 const vo = {
   id: data.id,
   name: data.name,
   title: `${data.name} (${data.alias})`,
   yaos: data.id.split("").map((x: string) => (x === "1" ? "yang" : "yin")),
 };
</script>
<template>
    <section class="gua small">
      <span
        v-for="(item, index) in vo.yaos"
        :class="item"
        v-bind:key="index"
      ></span>
      <label class="name2">{{ vo.title }}</label>
    </section>
</template>

<style scoped>
 section {
   margin-top: 10px;
 }

.gua .yang,
.gua .yin {
  display: block;
}

.gua .name2 {
   font-size: 15px;
 }

.gua .yang {
  background-color: var(--color-red);
}
.gua .yin {
  border-color: var(--color-black);
  border-left-style: solid;
  border-right-style: solid;
}

.gua.small .yang,
.gua.small .yin {
  margin-bottom: 5px;
  height: 6px;
  width: 40px;
}

.gua.small .yin {
  border-left-width: 18px;
  border-right-width: 18px;
}
</style>
