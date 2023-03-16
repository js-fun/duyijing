<template>
  <div class="about">
    <h2>如何快速寻找一个卦</h2>

    <ul class="help">
      <li>
        <p>从主页的六十四卦表中查询, 点机查看详细.</p>
      </li>
      <li>
        <p>直接修改如下链接中的卦名 (把"谦"字改成你需要查询的卦名)</p>
        <code>https://www.duyijing.cn/#!/gua/谦</code>
      </li>
      <li>
        <p>
          用二进制查询. 这里1表示阳爻, 0表示阴爻; 最右边为初爻.
          比如下面链接可得"师"卦.
        </p>
        <code>https://www.duyijing.cn/#!/gua/000010</code>
      </li>
      <li>
        <p>
          用卜噬所得数字(6,7,8,9). 同理最右边为初爻. 比如下面链接可得"蒙"卦.
        </p>
        <code>https://www.duyijing.cn/#!/gua/788698</code>
      </li>
      <li>
        <p>数字卦占卜所得三个数字. 最右边为第一个数字.</p>
        <code>https://www.duyijing.cn/#!/gua/333-222-111</code>
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
        <code>hw214 AT pm.me</code>
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
</style>
