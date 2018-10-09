<template>
  <div id="app">
    <div id="nav"
      v-if="!showNav">
      <router-link to="/">
        <img alt="house" src="./assets/house.png">
      </router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  computed: {
    showNav () {
      return this.$route.name === 'home'
    }
  }
}
</script>

<style>
html, body {
  background: #45346b;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  margin: 0 auto;
  background: #1e1d1d !important;
  position: relative;
  max-width: 1021px;
  box-shadow: 0 0 50px 5px rgba(0, 0, 0, 0.25);
}
#nav img {
  padding: 5px 0 0 10px;
}
</style>
