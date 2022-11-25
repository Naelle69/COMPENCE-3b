<template>
  <Navbar/>
  <router-view/>
  <footer/>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> --> 
</template>

<script>
import Navbar from '@/components/homepage/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App.vue',
  components: {
    Navbar,
    Footer
  }
}
</script>


