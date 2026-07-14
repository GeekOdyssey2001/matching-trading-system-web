<template>
  <router-view/>
</template>

<style lang="scss">
  @import "./assets/css/main.css";
  @import "./assets/css/color-dark.css";


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


// CSS 注释：1.单行// 2.多行 /*这是多行注释*/

//Vue自带样式去掉
/*
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
*/
</style>
