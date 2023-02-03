<script setup lang="ts">
import { getGuaData } from "../services/Yijing";

const props = defineProps<{ id: string }>();
const data = getGuaData(props.id);

const vo = {
  id: data.id,
  name: data.name,
  nameClass: data.name.length === 1 ? "name" : "name2",
  showGuaInfo: true,
  guaCi: data.gua_ci,
  tuanCi: data.tuan_ci,
  daXiang: data.da_xiang,
  yaos: data.id.split("").map((x) => (x === "1" ? "yang" : "yin")),
};
</script>
<template>
  <div class="col-sm-10 col-sm-offset-2">
    <div class="col-sm-3 gua large">
      <label :class="vo.nameClass">
        {{ vo.name }}
      </label>
      <span v-for="(item, index) in vo.yaos" v-bind:key="index" :class="item">
      </span>
    </div>
    <div class="col-sm-7 explanation">
      <section name="guaCi" v-if="vo.showGuaInfo">
        <label>卦辞</label>
        <p>{{ vo.guaCi }}</p>
      </section>
      <section name="daXiang" v-if="vo.showGuaInfo">
        <label>大象</label>
        <p>{{ vo.daXiang }}</p>
      </section>
      <section name="tuanCi" v-if="vo.showGuaInfo">
        <label>彖辞</label>
        <p>{{ vo.tuanCi }}</p>
      </section>
      <section name="yaoCi" v-if="!vo.showGuaInfo">
        <label>爻辞</label>
        <p>{{ vo.yaoCi }}</p>
      </section>
      <section name="xiaoXiang" v-if="!vo.showGuaInfo">
        <label>小象</label>
        <p>{{ vo.xiaoXiang }}</p>
      </section>
    </div>
  </div>
</template>

<style scoped>
.col-sm-10 {
  float: left;
}
.col-sm-3 {
  width: 25%;
  float: left;
}
.col-sm-7 {
  width: 58.3333%;
  float: left;
  margin-top: 55px;
}

.gua .yang,
.gua .yin {
  display: block;
  cursor: pointer;
}

.gua .name,
.gua .name2 {
  cursor: pointer;
}

.gua .yang.inactive,
.gua .yin.inactive {
  opacity: 0.2;
}
.gua .yang {
  background-color: #ff1100;
}
.gua .yin {
  border-color: #000;
  border-left-style: solid;
  border-right-style: solid;
}

.gua.large .name {
  margin-left: 60px;
  font-size: 28pt;
}
.gua.large .name2 {
  font-size: 28pt;
  margin-left: 40px;
}

.gua.large .yang,
.gua.large .yin {
  margin-bottom: 15px;
  height: 30px;
  width: 160px;
}
.gua.large .yin {
  border-left-width: 75px;
  border-right-width: 75px;
}

.explanation {
  margin-top: 55px;
}
.explanation section label {
  font-size: 18pt;
}
</style>
