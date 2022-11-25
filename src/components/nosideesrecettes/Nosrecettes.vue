<template>
    <div class="h titrerecettes mt-12 mx-6">
        <h2 class="h2marron mb-4"> Nos idées recettes </h2>
        <h3 class="h3vert mb-2"> Des recettes à des prix bas </h3>
        <p class="ptexte texterecettes mb-4"> 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus semper bibendum ex et eleifend. Donec accumsan. Pellentesque senectus 
        neque. Pellentesque se Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus semper bibendum ex et eleifend. Pellentesque senectus neque.
        </p>
    </div>

    <div class=" nosideesrecettes mb-20 relative snap-mandatory snap-x overflow-auto text-center" >
        <Recettes v-for="(idee,index) in idees" :key="index" :id="idee.id" :image="idee.image" :titre="idee.titre" :soustitre="idee.soustitre"  />
    </div>
</template>


<script>
// @ is an alias to /src
import Recettes from '@/components/nosideesrecettes/Recettes.vue'
import axios from 'axios'

export default {
name: 'Nosrecettes',
components: {
Recettes,
},

data(){
    return {
        idees:[],
        errors: [],
    }
},

// Fetches Details when the component is created.
created() {
axios.get('http://localhost:8080/idees.json')
.then(response => {
  // JSON responses are automatically parsed.
  this.idees = response.data.idees
})
.catch(e => {
  this.errors.push(e)
})
}
}
</script>

<style scoped>

.nosideesrecettes{
  padding-bottom: 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
}

/* TABLETTE */
@media screen and (min-width:481px) and (max-width:768px){


}


/* LAPTOP ET DESKTOP */
@media screen and (min-width:769px) and (max-width:2570px){

    .titrerecettes{
  margin-top: 230px;
  width: 65%;
  margin-left: 100px;
}

.nosideesrecettes{
  padding-left: 10px;
  padding-right: 10px;
  width: auto;
  margin-left: 200px;
  margin-right: 200px;
  margin-top: 50px;
}
}

</style>