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

@media (hover: hover) {
  a:hover {
    text-decoration: none !important;
  }
}
</style>
