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
    <label class="name">{{ vo.title }}</label>
  </section>
</template>

<style scoped>
.gua.small {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
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
  height: 5px;
  width: 46px;
}

.gua.small .yin {
  border-left-width: 21px;
  border-right-width: 21px;
}

@media (max-width: 375px) {
  .gua.small .yin {
    border-left-width: 14px;
    border-right-width: 14px;
  }

  .gua.small .yang,
  .gua.small .yin {
    margin-bottom: 5px;
    height: 3px;
    width: 30px;
  }
}
</style>
