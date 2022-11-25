<template>
  <div class="about">
<!--     <Navbar /> -->
    <Blog />
<!--     <Footer/> -->
  </div>
</template>

<script>
/* import Navbar from '@/components/homepage/Navbar.vue' */
import Notreblog from '@/components/Notreblog.vue'
/* import Footer from '@/components/Footer.vue' */
import axios from 'axios'

export default {
  name: 'Blog',
  components: {
    Navbar,
    Notreblog,
    Footer
  },


  data(){
          return {
              notreblog:[],
              errors: []
          }
    },

    // Fetches Details when the component is created.
    created() {
      axios.get(`http://localhost:8080/products.json`)
      .then(response => {
        // JSON responses are automatically parsed.
        this.notreblog = response.data.notreblog
      })
      .catch(e => {
        this.errors.push(e)
      })
    }
}
</script>
