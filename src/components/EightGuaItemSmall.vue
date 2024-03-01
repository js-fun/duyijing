// Visual representation of 8gua

<script setup lang="ts">
import { getEightGuaData } from "../services/Yijing";

const props = defineProps<{ id: string }>();
const data = getEightGuaData(props.id);

const vo = {
  id: data.id,
  name: data.name,
  title: `${data.name}(${data.alias})`,
  yaos: data.id.split("").map((x: string) => (x === "1" ? "yang" : "yin")),
};
</script>
<template>
  <section class="gua small">
    <label class="name">{{ vo.title }}</label>
    <span
      v-for="(item, index) in vo.yaos"
      :class="item"
      v-bind:key="index"
    ></span>
  </section>
</template>

<style scoped>
.gua.small {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  row-gap: 5px;
  flex-wrap: nowrap;
  width: 40px;
  justify-content: end;
}

.gua.small label {
  font-size: 14px;
  text-wrap: nowrap;
}

.gua.small .yang {
  background-color: var(--color-red);
}

.gua.small .yang,
.gua.small .yin {
  height: 5px;
}

.gua.small .yin {
  border-color: var(--color-black);
  border-left-style: solid;
  border-right-style: solid;
  border-left-width: 17px;
  border-right-width: 17px;
}

@media (max-width: 375px) {
  .gua.small {
    width: 26px;
    row-gap: 3px;
  }
  .gua.small label {
    font-size: 9px;
  }
  .gua.small .yin {
    border-left-width: 11px;
    border-right-width: 11px;
  }

  .gua.small .yang,
  .gua.small .yin {
    height: 3px;
  }
}
</style>
