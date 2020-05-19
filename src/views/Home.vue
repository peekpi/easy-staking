<template>
  <div class="home">
    <Button type="primary" @click="click"/>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  methods:{
    click(){
      this.$root.message("error",'<HelloWorld msg="HI"/>');
    }
  },
  components: {
    HelloWorld
  }
}
</script>
