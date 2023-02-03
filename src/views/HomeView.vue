<script setup lang="ts">
import { getSixFourGuas } from "../services/Home";
const itemss = getSixFourGuas();
</script>

<template>
  <main>
    <div class="yin-yang">
      <div class="six-four">
        <table class="table">
          <tr v-for="items in itemss">
            <td v-for="item in items">
              <gua-simple gua-size="small" gua-key="item.id">{{
                item.name
              }}</gua-simple>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </main>
</template>

<style scoped>
.six-four table tr {
  border-right: 1px solid #ddd;
}
.six-four table tr:last-child {
  border-bottom: 1px solid #ddd;
}

.six-four table tr td {
  border-left: 1px solid #ddd;
  width: 50px;
  text-align: center;
}
</style>
