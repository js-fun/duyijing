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
        <td
          v-for="item in xianTianGuas"
          v-bind:key="item.id"
          class="xian-tian-gua-container"
        >
          <EightGuaItemSmall :id="item.id" />
        </td>
        <td class="xian-tian-gua-container">
          <div class="xian-tain-gua-action">
            <span class="xian-tain-gua-note">←上卦</span>
            <span class="xian-tain-gua-note">↓下卦</span>
          </div>
        </td>
      </tr>

      <tr v-for="(items, index) in itemss" v-bind:key="index">
        <td v-for="item in items" v-bind:key="item.id">
          <GuaItemSmall :id="item.id" />
        </td>
        <td class="xian-tian-gua-container">
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
  text-align: center;
  padding: 5px 10px 10px;
  vertical-align: bottom;
  border-left: 1px solid #000;
  border-top: 1px solid #000;
}
table {
  border-collapse: collapse;
}

.xian-tian-gua-container {
  ackground-color: #d1d9e0;
}
.xian-tain-gua-action {
  display: flex;
  flex-direction: column;
  font-size: 12px;
}

@media (hover: hover) {
  a:hover {
    text-decoration: none !important;
  }
}

@media (max-width: 375px) {
  .six-four table tr td {
    padding: 3px 5px 5px;
  }
  .xian-tain-gua-action {
    font-size: 9px;
  }
  .xian-tain-gua-note {
    display: none;
  }
}
</style>
