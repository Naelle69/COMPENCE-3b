<template>
    <div class="nosplats">
        <div class="h offres ml-4 mt-10">
            <h2 class="h2marron mb-4"> Nos offres </h2>
            <h3 class="h3vert mb-4"> Nos plats </h3>
        </div>

        <!-- <div class="flex justify-around"> -->
        <div class="relative snap-mandatory snap-x overflow-auto mt-10">
                <Sectionplats v-for="(plat,index) in plats" :key="index" :id="plat.id" :soustitre="plat.soustitre" :texte="plat.texte" :image="plat.image" :button="plat.boutton" />
        </div>
    </div>
</template>


<script>
// @ is an alias to /src
import Sectionplats from '@/components/nosoffres/Sectionplats.vue'
import axios from 'axios'

export default {
name: 'Nosplats',
components: {
Sectionplats,
},

data(){
    return {
        plats:[],
        errors: [],
    }
},

// Fetches Details when the component is created.
created() {
axios.get('http://localhost:8080/plats.json')
.then(response => {
  // JSON responses are automatically parsed.
  this.plats = response.data.plats
})
.catch(e => {
  this.errors.push(e)
})
}
}
</script>


<style scoped>

.relative {
display: flex;
align-items: center;
justify-content: space-between;
flex-direction: row;
height: auto;
overflow-y: hidden;
}

/* TABLETTE */
@media screen and (min-width:481px) and (max-width:768px){


}


/* LAPTOP ET DESKTOP */
@media screen and (min-width:769px) and (max-width:2570px){

}

</style>