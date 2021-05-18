<template>
  <div id="app">
      <router-view />
  </div>
</template>

<script>

export default {
  methods: {
    calculate() {

    }
  },
  name: 'App',
  components: {
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
html {
    scroll-behavior: smooth;
}
html, body {
    min-height: 100%;
}
body, div, form, input, select, textarea, p{ 
    padding: 0;
    margin: 0;
    outline: none;
    font-size: 16px;
    color: #666;
    font-family: 'Noto Sans KR', sans-serif;
}
</style>
