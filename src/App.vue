<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';

  @Component({})
  export default class App extends Vue {

  }
</script>

<style>
  body {
    padding: 0;
    margin: 0;
    height: 100vh;
    width: 100vw;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100%;
    width: 100%;
  }
</style>
