<script lang="ts">
import Y from "@freizl/yijing/zh-TW/64gua.json";
import { transform } from "../services/Gua";

// may turn name to binary id.
const normalizeInput = (paramsKey: string | string[]): string => {
  // turns out `this.$route.params.id` has type `string | string[]`
  let key: string = "";
  if (Array.isArray(paramsKey)) {
    key = paramsKey[0];
  } else {
    key = paramsKey;
  }

  if (key.match(/[0-9-]+/)) {
    return key;
  } else {
    const xs = Y.filter((d) => key === d.name);
    if (xs.length === 1) {
      return xs[0].id;
    } else {
      console.error(`unable to find data from key ${key}`);
      return key;
    }
  }
};

// $document[0].title = guas.base.name + '卦';
export default {
  data() {
    const id = normalizeInput(this.$route.params.id);
    const guas = transform(id);
    return { guas };
  },
};
</script>

<template>
  <main>
    <div class="gua-container">
      <h1>{{ guas.base.displayName }}</h1>
      <div class="row" id="zhu-gua">
        <div class="col-sm-10 col-sm-offset-2">
          <!-- <gua gua-size="large" gua-key="{{guas.base.id}}" ng-show="baseKey" ></gua> -->
        </div>
      </div>

      <div v-for="item in guas.xs">
        <h3>
          <a :href="item.url">{{ item.displayName }}</a>
        </h3>

        <div class="row">
          <div class="col-sm-10 col-sm-offset-2">
            <!-- <gua gua-size="large" gua-key="{{item.id}}" ng-show="baseKey"></gua> -->
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style></style>
