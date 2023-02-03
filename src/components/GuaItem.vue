<script lang="ts">
import { getGuaData } from "../services/Yijing";

type Yao = {
  kind: string;
  yaoCi: string;
  xiaoXiang: string;
  className: string;
};
type ViewObject = {
  id: string;
  name: string;
  nameClass: string;
  guaCi: string;
  tuanCi: string;
  daXiang: string;
  activeYao: Yao | undefined;
  yaos: Yao[];
};
export default {
  props: {
    id: String,
  },
  data() {
    const guaVal = getGuaData(this.id || "");
    const yaos = guaVal.id.split("").map((x: string, index: number) => {
      const kind = x === "1" ? "yang" : "yin";
      return {
        kind,
        yaoCi: guaVal.yao_ci[5 - index],
        xiaoXiang: guaVal.xiao_xiang[5 - index],
        className: kind as string,
      };
    });
    const vo: ViewObject = {
      id: guaVal.id,
      name: guaVal.name,
      nameClass: guaVal.name.length === 1 ? "name" : "name2",
      guaCi: guaVal.gua_ci,
      tuanCi: guaVal.tuan_ci,
      daXiang: guaVal.da_xiang,
      activeYao: undefined,
      yaos,
    };
    return { vo };
  },
  methods: {
    yaoClick(k: number) {
      const yaos = this.vo.yaos.map((x: Yao, i: number) => {
        const status = i === k ? "active" : "inactive";
        return {
          ...x,
          className: x.kind + " " + status,
        };
      });

      this.vo = {
        ...this.vo,
        activeYao: yaos[k],
        yaos,
      };
    },
    guaClick() {
      this.vo = {
        ...this.vo,
        activeYao: undefined,
        yaos: this.vo.yaos.map((x: Yao) => {
          return {
            ...x,
            className: x.kind,
          };
        }),
      };
    },
  },
};
</script>
<template>
  <div class="col-sm-10 col-sm-offset-2">
    <div class="col-sm-3 gua large">
      <label :class="vo.nameClass" @click="guaClick">
        {{ vo.name }}
      </label>
      <span
        v-for="(item, index) in vo.yaos"
        v-bind:key="index"
        :class="item.className"
        @click="yaoClick(index)"
      >
      </span>
    </div>
    <div class="col-sm-7 explanation">
      <section name="guaCi" v-if="!vo.activeYao">
        <label>卦辞</label>
        <p>{{ vo.guaCi }}</p>
      </section>
      <section name="daXiang" v-if="!vo.activeYao">
        <label>大象</label>
        <p>{{ vo.daXiang }}</p>
      </section>
      <section name="tuanCi" v-if="!vo.activeYao">
        <label>彖辞</label>
        <p>{{ vo.tuanCi }}</p>
      </section>
      <section name="yaoCi" v-if="vo.activeYao">
        <label>爻辞</label>
        <p>{{ vo.activeYao?.yaoCi }}</p>
      </section>
      <section name="xiaoXiang" v-if="vo.activeYao">
        <label>小象</label>
        <p>{{ vo.activeYao?.xiaoXiang }}</p>
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
  cursor: default;
}

.gua .name,
.gua .name2 {
  cursor: default;
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
