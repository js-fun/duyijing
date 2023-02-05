<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { navs } from "./services/Yijing";
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
