<template>
  <Navbar />
  <div class="mt-5">
    <router-view />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
body {
  background: #f5f5f5;
  height: 100vh;
  user-select: none;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  border: 0px solid #000;
}
</style>
