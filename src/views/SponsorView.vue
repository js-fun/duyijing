<script lang="ts">
export default {};
</script>
<template>
  <div class="about">
    <h2>微信打赏</h2>
    <div>
      <img class="weixin-sponsor" src="@/assets/weixin-sponsors.jpg" />
    </div>

    <h2>Github打赏</h2>
    <ul>
      <li>
        <a href="https://github.com/sponsors/freizl" ref="nofollow noreferer"
          >点击这里</a
        >
      </li>
    </ul>
  </div>
</template>

<style scoped>
h2 {
  border-bottom: 1px solid var(--color-border);
  margin: 2rem 0 1rem;
}
.weixin-sponsor {
  width: 20rem;
}
</style>
