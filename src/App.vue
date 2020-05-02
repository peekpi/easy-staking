<template>
  <div id="app">
    <HelloWorld msg="Hello World!"/>
    <Wallet/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Wallet from './components/Wallet.vue'
import hmy from "./js/hmy.js"

console.log(hmy);
//window.addEventListener("load", alert("loadx"));

export default {
  name: 'App',
  components: {
    HelloWorld,
    Wallet
  }
}
//const D = console.log;
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
