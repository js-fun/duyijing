<script lang="ts">
export default {
  data() {
    return {
      guaMing: "",
    };
  },
  methods: {
    visitGua(val: string) {
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
        <div class="query">
          <input
            v-model="guaMing"
            type="input"
            placeholder="选择任意一种方式输入"
          />
          <button value="Go" @click="visitGua(guaMing)">查询 &#x262F;</button>
        </div>

        <ul>
          <li>
            <p>卦名，比如"谦"。</p>
          </li>
          <li>
            <p>
              卜噬所得数字(6,7,8,9)。最左边为初爻。比如输入"896887"，可得<a
                href="/gua/896887"
                nofollow
                noreferer
                >蒙</a
              >卦。
            </p>
          </li>
          <li>
            <p>
              数字卦占卜所得三个数字。最左边为第一个数字。比如"319-978-115"，可得<a
                href="/gua/319-978-115"
                nofollow
                noreferer
                >咸</a
              >卦。
            </p>
          </li>
        </ul>
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
        <a href="mailto:duyijing@pm.me">duyijing@pm.me</a>
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

.query {
  display: flex;
  flex-direction: row;
  justify-content: start;
  gap: 0.5rem;
}
button {
  padding: 0.38rem 1rem;
  border: 1px solid #c0c0c0;
  border-radius: 5px;
}

input {
  padding: 0.5rem;
  width: 160px;
  display: inline-block;
}
</style>
