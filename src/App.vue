<template>
  <header-component></header-component>
  <index-component></index-component>
 <hello-world></hello-world>
  <productos-component></productos-component>
 <contacto-component></contacto-component>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import HeaderComponent from '@/components/HeaderComponent'
import ContactoComponent from '@/components/ContactoComponent'
import IndexComponent from '@/components/IndexComponent'
import ProductosComponent from '@/components/ProductosComponent'
export default {
  name: 'App',
  components: {
      ProductosComponent,
      IndexComponent,
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
    height: 100%;
    width: 100%;
   }
</style>
