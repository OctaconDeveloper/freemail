<template>
    <div id="app" style="margin-top:2px">
      <Header/>
      <router-view />
      <Footer />
    </div>
</template>

<script>

import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
export default {
  name: 'app',
  components: { Header,Footer }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
