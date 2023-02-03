<script setup lang="ts">
import { getSixFourGuas } from "../services/Home";
import GuaItemSmall from "../components/GuaItemSmall.vue";
const itemss = getSixFourGuas();
</script>

<template>
  <div class="six-four">
    <table class="table">
      <tr v-for="(items, index) in itemss" v-bind:key="index">
        <td v-for="item in items" v-bind:key="item.id">
          <GuaItemSmall :id="item.id" />
        </td>
      </tr>
    </table>
  </div>
</template>

<style scoped>
.six-four {
  margin: 10px auto;
  width: 70%; /* hack: certer table */
}
.six-four table tr {
  border-right: 1px solid #000;
}
.six-four table tr:last-child {
  border-bottom: 1px solid #000;
}

.six-four table tr td {
  border-left: 1px solid #000;
  /* width: 50px; */
  text-align: center;
}
table > tr > td {
  padding: 15px;
  /* line-height: 1.42857143; */
  vertical-align: top;
  border-top: 1px solid #000;
}
table {
  border-collapse: collapse;
}
</style>
