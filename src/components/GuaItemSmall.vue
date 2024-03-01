<script setup lang="ts">
import { getGuaData } from "../services/Yijing";

const props = defineProps<{ id: string }>();
const data = getGuaData(props.id);

const vo = {
  id: data.id,
  name: data.name,
  url: "/gua/" + data.name,
  nameClass: "name",
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
.gua.small {
  display: flex;
  flex-direction: column;
  row-gap: 3px;
  justify-content: center;
  width: 40px;
  flex-wrap: nowrap;
  justify-content: end;
}

.gua.small label {
  font-size: 16px;
  text-wrap: nowrap;
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
  height: 5px;
}

.gua.small .yin {
  border-left-width: 18px;
  border-right-width: 18px;
}

@media (max-width: 375px) {
  .gua.small {
    width: 26px;
    row-gap: 2px;
  }
  .gua.small label {
    font-size: 12px;
  }

  .gua.small .yin {
    border-left-width: 12px;
    border-right-width: 12px;
  }

  .gua.small .yang,
  .gua.small .yin {
    height: 3px;
  }
}
</style>
