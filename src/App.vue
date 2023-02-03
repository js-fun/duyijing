<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
// <RouterLink to="/">六十四卦表</RouterLink>
const navs = [
  { url: "/doc/yijing/1", title: "易經上" },
  { url: "/doc/yijing/2", title: "易經下" },
  { url: "/doc/tuan/1", title: "彖傳上" },
  { url: "/doc/tuan/2", title: "彖傳下" },
  { url: "/doc/xiang/1", title: "象傳上" },
  { url: "/doc/xiang/2", title: "象傳下" },
  { url: "/doc/xi-ci-1", title: "系辭上" },
  { url: "/doc/xi-ci-2", title: "系辭下" },
  { url: "/doc/wen-yan", title: "文言傳" },
  { url: "/doc/shuo-gua", title: "說卦傳" },
  { url: "/doc/xu-gua", title: "序卦傳" },
  { url: "/doc/za-gua", title: "雜卦傳" },
];
</script>

<template>
  <div
    class="navbar navbar-expand-lg bg-light fixed-top"
    role="navigation"
  >
    <div class="container-fluid">
      <a class="navbar-brand yin-yang small" href="/">易經</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="navbar-collapse collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li v-for="n in navs" class="nav-item">
            <RouterLink class="nav-link" :to="n.url">{{ n.title }}</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <!-- <li>
           <span class="glyphicon glyphicon-question-sign help-tour" style="font-size:20px;margin-top:10px;cursor:pointer;" aria-hidden="true" title="在观看卦时可点击以获得提示"></span>
           </li> -->

  <!-- <nav> </nav> -->

  <div class="container">
    <RouterView :key="$route.path" />

    <hr />
    <footer class="footer">
      <p>
        <span>© 2012-present HaishengWu </span>
        <RouterLink to="/help">帮助</RouterLink>
      </p>
    </footer>
  </div>
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
