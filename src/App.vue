<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
const navs = [
  { url: "/", title: "易經" },
  { url: "/doc/yijing/1", title: "易經上" },
  { url: "/doc/yijing/2", title: "易經下" },
  { url: "/doc/tuan/1", title: "彖傳上" },
  { url: "/doc/tuan/2", title: "彖傳下" },
  { url: "/doc/xiang/1", title: "象傳上" },
  { url: "/doc/xiang/2", title: "象傳下" },
  { url: "/doc/xi-ci/1", title: "系辭上" },
  { url: "/doc/xi-ci/2", title: "系辭下" },
  { url: "/doc/wen-yan", title: "文言傳" },
  { url: "/doc/shuo-gua", title: "說卦傳" },
  { url: "/doc/xu-gua", title: "序卦傳" },
  { url: "/doc/za-gua", title: "雜卦傳" },
];
</script>

<template>
  <header>
    <nav>
      <RouterLink
        v-for="n in navs"
        class="nav-link"
        :to="n.url"
        v-bind:key="n.title"
      >
        {{ n.title }}
      </RouterLink>
    </nav>
  </header>

  <main>
    <RouterView :key="$route.path" />
  </main>

  <hr />
  <footer class="footer">
    <p>
      <span>© 2012-present HaishengWu </span>
      <RouterLink to="/help">帮助</RouterLink>
    </p>
  </footer>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  z-index: 1080;
}

nav {
  text-align: center;
  background-color: var(--color-black-mo);
  color: #fff;
  padding: 15px 0;
}

nav a,
nav a.router-link-exact-active {
  color: #fff;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 0.3rem;
  text-decoration: none;
  font-size: 18px;
  font-weight: 600;
}

main {
  margin-top: 45px;
}

hr {
  margin: 1rem 0;
}

footer {
  font-size: 12px;
}
</style>
