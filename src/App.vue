<script lang="ts">
 /* eslint-disable @typescript-eslint/no-unused-vars */
 import { RouterLink, RouterView } from "vue-router";
 import { navs } from "./services/Yijing";

 export default {
   data() {
     return {
       isMobile: false,
       isMenuVisible: true,
       navs,
     };
   },
   methods: {
     toggleMenu() {
       this.isMenuVisible = !this.isMenuVisible;
     },
     checkViewport() {
       const mediaQuery = window.matchMedia("(max-width: 375px)");
       this.isMobile = mediaQuery.matches;
       this.isMenuVisible = !this.isMobile;
     },
   },
   created() {
     this.checkViewport();
   },
 };
</script>

<template>
  <header>
    <nav>
      <button @click="toggleMenu" class="menu-button" aria-label="Toggle menu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          class="bi bi-list"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M2.5 12.5A.5.5 0 0 1 2 12V11a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-11zm0-5A.5.5 0 0 1 2 7V6a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-11zm0-5A.5.5 0 0 1 2 2V1a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-11z"
          />
        </svg>
      </button>
      <div class="menu" v-show="isMenuVisible">
        <RouterLink
          v-for="n in navs"
          class="nav-link"
          :to="n.url"
          v-bind:key="n.title"
        >
          {{ n.title }}
        </RouterLink>
      </div>
    </nav>
  </header>

  <main>
    <RouterView :key="$route.path" />
  </main>

  <hr />
  <footer class="footer">
    <p>
      <span>© 2012-present HaishengWu </span>
      <RouterLink class="help-item" to="/help">帮助</RouterLink>
      <RouterLink class="help-item" to="/sponsor">打赏</RouterLink>
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

.menu-button {
  display: none;
  width: 30px;
  height: 30px;
  padding: 5px 0 0;
  background-color: #d1d9e0;
  border: 0;
  border-radius: 5px;
  margin-left: 5px;
}

.menu {
  display: flex;
  justify-content: center;
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
  font-weight: 600;
}

main {
  margin-top: 45px;
}

hr {
  margin: 1rem 0;
}

footer {
  font-size: 11pt;
}

footer .help-item {
  margin-right: 5px;
}

@media (max-width: 375px) {
  nav {
    padding: 5px 0;
  }
  .menu-button {
    display: block;
  }
}
</style>
