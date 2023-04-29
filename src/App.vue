<script>

export default {
  name: 'App',
}
</script>

<template>
    <router-link to="/">Home</router-link>
    <router-link to="/cart">Cart</router-link>
    <router-link to="/products">Products</router-link>
    <router-view />
</template>


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
