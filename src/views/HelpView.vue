<template>
  <div class="about">
    <h2>如何快速寻找一个卦</h2>

    <ul class="help">
      <li>
        <p>从主页的六十四卦表中查询, 点机查看详细.</p>
      </li>
      <li>
        <p>直接修改如下链接中的卦名 (把"謙"字改成你需要查询的卦名)</p>
        <code>https://www.duyijing.cn/#!/gua/謙 </code>
      </li>
      <li>
        <p>
          用二进制查询. 这里1表示阳爻, 0表示阴爻; 最右边为初爻.
          比如下面链接可得"师"卦.
        </p>
        <code>https://www.duyijing.cn/#!/gua/000010 </code>
      </li>
      <li>
        <p>
          用卜噬所得数字(6,7,8,9). 同理最右边为初爻. 比如下面链接可得"蒙"卦.
        </p>
        <code>https://www.duyijing.cn/#!/gua/788698 </code>
      </li>
      <li>
        <p>数字卦占卜所得三个数字. 最右边为第一个数字.</p>
        <code>https://www.duyijing.cn/#!/gua/333-222-111 </code>
      </li>
    </ul>

    <h2>卦得转换</h2>

    <h3>之卦</h3>
    <p>
      占到的卦爻变所得. 比如卜噬中6和9都表是有爻变.
      数字卦的第三个数字便是指向爻变的爻.
    </p>

    <h3>綜卦</h3>
    <p>从对面看卦(上到下).</p>
    <h3>錯卦</h3>
    <p>所有爻阳变阴,阴变阳.</p>
    <h3>交卦</h3>
    <p>上下卦相交错. 即上卦变下卦, 下卦变上卦.</p>

    <h2>联系我</h2>

    <code>hw214 AT pm.me</code>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .x-about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
