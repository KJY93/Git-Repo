<template>
  <div id="app">
    <div class="text-center" id="nav">
      <router-link class="link-font-size" v-bind:to="'/'">HOME</router-link> <span class="link-font-size"> | </span>
      <router-link class="link-font-size" v-bind:to="'/search'"> SEARCH</router-link>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: "App"
  };
</script>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: "Nanum Pen Script", cursive, "Sans-Serif";
    line-height: 1.4;
  }

  ol,
  ul {
    padding-left: 10px;
  }

  .link-font-size, .footer-container {
    font-size: 1.5em;
    color: #ffffff;
  }

  .link-font-size:hover {

    color: #7fffd4;

  }

  #nav {
    background: #343434;
  }

  .footer-container {
    background: #343434;
    color: #ffffff;
    padding-top: 1px;
    padding-bottom: 1px;
  }
</style>
