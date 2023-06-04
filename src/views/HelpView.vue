<script lang="ts">
import { ref } from "vue";

export default {
  data() {
    return {
      guaMing: "",
    };
  },
  methods: {
    visitGua(val) {
      location.href = `/gua/${val}`;
    },
  },
};
</script>
<template>
  <div class="about">
    <h2>如何快速寻找一个卦</h2>

    <ul class="help">
      <li>
        <p>从主页的六十四卦表中查询, 点机查看详细。</p>
      </li>
      <li>
        <fieldset>
          在下面输入框中输入
          <ul>
            <li>
              <p>卦名，比如"谦"。</p>
            </li>
            <li>
              <p>
                二进制数据。这里1表示阳爻,
                0表示阴爻。最右边为初爻。比如输入"000010"，可得"师"卦。
              </p>
            </li>
            <li>
              <p>
                卜噬所得数字(6,7,8,9)。最右边为初爻。比如输入"788698"，可得"蒙"卦。
              </p>
            </li>
            <li>
              <p>
                数字卦占卜所得三个数字。最右边为第一个数字。比如"115-978-319"，可得"咸"卦。
              </p>
            </li>
          </ul>
        </fieldset>
        <fieldset>
          <legend>&#x262F;</legend>
          <input v-model="guaMing" type="input" placeholder="" />
          <button value="Go" @click="visitGua(guaMing)">查询</button>
        </fieldset>
      </li>
      <li>
        <p>
          当使用卜筮或者数字卦的数字查询卦时，会显示之卦、綜卦、錯卦、交卦，以方便对照查看。
        </p>
      </li>
      <li>
        <p>点击每爻可查看爻词和小象。点击卦名可查看卦词、大象和彖词。</p>
      </li>
    </ul>

    <h2>卦得转换</h2>

    <ul>
      <li>
        <p>之卦: 占到的卦爻变所得.</p>
        <ul>
          <li>卜噬中6和9都表是有爻变.</li>
          <li>数字卦的第三个数字便是指向爻变的爻.</li>
        </ul>
      </li>
      <li>
        <p>綜卦: 从对面看卦(上到下).</p>
      </li>
      <li>
        <p>錯卦: 所有爻阳变阴,阴变阳.</p>
      </li>
      <li>
        <p>交卦: 上下卦相交错. 即上卦变下卦, 下卦变上卦.</p>
      </li>
    </ul>

    <h2>联系我</h2>

    <ul>
      <li>
        <code>https://github.com/js-fun/duyijing/issues</code>
      </li>
    </ul>
  </div>
</template>

<style scoped>
ul.help li {
  padding-bottom: 10px;
}

h2 {
  border-bottom: 1px solid var(--color-border);
  margin: 2rem 0 1rem;
}

button {
  padding: 0.38rem 1rem;
  border: 1px solid #c0c0c0;
  border-radius: 5px;
}

input {
  padding: 0.5rem;
  width: 120px;
  display: inline-block;
  margin-right: 1rem;
 }
</style>
