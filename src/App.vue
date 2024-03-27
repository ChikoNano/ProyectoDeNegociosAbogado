<template>
    <header-component></header-component>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
 <contacto-component></contacto-component>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import HeaderComponent from '@/components/HeaderComponent'
import ContactoComponent from '@/components/ContactoComponent'
export default {
  name: 'App',
  components: {
      HeaderComponent,
    HelloWorld,
      ContactoComponent
  }
}

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
