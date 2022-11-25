<template>
  <div>
    <Navbar />
    <Contenuhomepage />
    <Nosplats />
    <Nosextras />
    <Nosrecettes />
    <Promotion />
    <Avis />
    <Astuce />
    <Contacteznous />
    <Avantages />
    <Footer />
  <!--   <Boutton1 />
    <Boutton2 />
    <Boutton3 /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/homepage/Navbar.vue'
import Contenuhomepage from '@/components/homepage/Contenuhomepage.vue'
import Nosplats from '@/components/nosoffres/Nosplats.vue'
import Nosextras from '@/components/nosoffres/Nosextras.vue'
import Nosrecettes from '@/components/nosideesrecettes/Nosrecettes.vue'
import Promotion from '@/components/promotion/Promotion.vue'
import Avis from '@/components/Avis.vue'
import Astuce from '@/components/Astuce.vue'
import Contacteznous from '@/components/Contacteznous.vue'
import Avantages from '@/components/Avantages.vue'
import Footer from '@/components/Footer.vue'
/* import Boutton1 from '@/components/bouttons/Boutton1.vue'
import Boutton2 from '@/components/bouttons/Boutton2.vue'
import Boutton3 from '@/components/bouttons/Boutton3.vue' */
import axios from 'axios'

export default {
  name: 'HomeView',
  components: {
    Navbar,
    Contenuhomepage,
    Nosplats, 
    Nosextras,
    Nosrecettes,
    Promotion,
    Avis,
    Astuce,
    Contacteznous,
    Avantages,
    Footer
    /* Boutton1,
    Boutton2,
    Boutton3 */
  },


data(){
        return {
            Contenuhomepage:[],
            errors: []
        }
  },

  // Fetches Details when the component is created.
  created() {
    axios.get(`http://localhost:8080/products.json`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.contenuhomepage = response.data.contenuhomepage
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
}
</script>
