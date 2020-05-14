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
    message(type, content) {
      this.$Message[type]({
        background: true,
        content,
        duration: 5
      });
    },
    click(){
      this.message("error",'<HelloWorld msg="HI"/>');
    }
  },
  components: {
    HelloWorld
  }
}
</script>
