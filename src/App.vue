<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

    <div class="wrapper">
      <nav>
        <RouterLink to="/">六十四卦表</RouterLink>
        <RouterLink to="/doc/yijing/1">易經上</RouterLink>
        <RouterLink to="/doc/yijing/2">易經下</RouterLink>
        <RouterLink to="/doc/tuan/1">彖傳上</RouterLink>
        <RouterLink to="/doc/tuan/2">彖傳下</RouterLink>
        <RouterLink to="/doc/xiang/1">象傳上</RouterLink>
        <RouterLink to="/doc/xiang/2">象傳下</RouterLink>
        <RouterLink to="/xi-ci-1">系辭上</RouterLink>
        <RouterLink to="/xi-ci-2">系辭下</RouterLink>
        <RouterLink to="/wen-yan">文言傳</RouterLink>
        <RouterLink to="/shuo-gua">說卦傳</RouterLink>
        <RouterLink to="/xu-gua">序卦傳</RouterLink>
        <RouterLink to="/za-gua">雜卦傳</RouterLink>
        <RouterLink to="/help">帮助</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView :key="$route.path" />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  /* width: 100%; */
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: block;
  padding: 0 1rem;
  /* border-left: 1px solid var(--color-border); */
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
