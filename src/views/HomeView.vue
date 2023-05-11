<script setup lang="ts">
import { getSixFourGuas } from "../services/Home";
import { XianTian } from "../services/Yijing";
import GuaItemSmall from "../components/GuaItemSmall.vue";
import EightGuaItemSmall from "../components/EightGuaItemSmall.vue";
const itemss = getSixFourGuas();
const xianTianGuas = XianTian.reverse();
</script>

<template>
  <div class="six-four">
    <table class="table">
      <tr>
        <td v-for="item in xianTianGuas" v-bind:key="item.id" class="xian-tian-gua">
          <EightGuaItemSmall :id="item.id" />
        </td>
        <td style="font-size: 15px;padding-top: 20px;" class="xian-tian-gua">
          <span>← 上卦</span>
          <br/>
          <span>↓ 下卦</span>
        </td>
      </tr>

      <tr v-for="(items, index) in itemss" v-bind:key="index">
        <td v-for="item in items" v-bind:key="item.id">
          <GuaItemSmall :id="item.id" />
        </td>
        <td class="xian-tian-gua">
          <EightGuaItemSmall :id="xianTianGuas[index].id" />
        </td>
      </tr>
    </table>
  </div>
</template>

<style scoped>
.six-four {
  display: flex;
  justify-content: space-around;
}
.six-four table tr {
  border-right: 1px solid #000;
}
.six-four table tr:last-child {
  border-bottom: 1px solid #000;
}

.six-four table tr td {
  border-left: 1px solid #000;
  text-align: center;
  padding: 8px 20px;
  vertical-align: top;
  border-top: 1px solid #000;
}
table {
  border-collapse: collapse;
}

.xian-tian-gua {
  background-color: #d1d9e0;
}

@media (hover: hover) {
  a:hover {
    text-decoration: none !important;
  }
}
</style>
