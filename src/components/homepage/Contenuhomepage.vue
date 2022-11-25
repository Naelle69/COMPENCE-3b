<template>   
  <header>
<!--     <div class="homepage"> -->
    <div class="navbar ml-4"> 
      <div class="contentmobile">
        <div class="rechercher" href="lien">
          <img src="@/assets/images/svg-icones/loupemarron.svg" alt="Rechercher" width="20"/>
        </div>
        <div class="home" href="lien">
          <img src="@/assets/images/svg-icones/home.svg" alt="Rechercher" width="20"/>
        </div>
        <div class="contactnavigation">
          <div class="telephone" href="lien">
            <img src="@/assets/images/svg-icones/telephonemarron.svg" alt="Panier" width="19"/> 
          </div>
          <div class="enveloppe" href="lien">
            <img src="@/assets/images/svg-icones/enveloppe.svg" alt="Mon compte" width="20"/>
          </div>
          <div class="facebook" href="lien">
            <img src="@/assets/images/svg-icones/facebookmarron.svg" alt="Panier" width="19"/> 
          </div>
          <div class="instagram" href="lien">
            <img src="@/assets/images/svg-icones/instagrammarron.svg" alt="Mon compte" width="20"/>
          </div>
        </div>
        <div class="client">
          <div class="panier" href="lien">
            <img src="@/assets/images/svg-icones/paniermarron.svg" alt="Panier" width="19"/> 
          </div>
          <div class="moncompte" href="lien">
            <img src="@/assets/images/svg-icones/moncompte.svg" alt="Mon compte" width="20"/>
          </div>
        </div>
      </div>
    </div>
    <div class="contenuhomepage mr-4">
      <div class="logohomepage mt-11 mb-8">
        <img src="@/assets/images/logobeige.svg" alt="Logo Pok'Gourmet" width="70"/>
      </div>

      <div class="pokgourmet w-70 mb-4">
        <h1 class="mb-5">Pok'Gourmet</h1>
        <h2 class="h2marron mb-6">Donnez vie à vos envies</h2>
        <p class="pgourmet mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, ut auctor lectus . At enim aucacilisis eget. Condimenpellentesque risus, tincidunt. Pro morbi tempor, curabitur neque quam convallis.</p>
        <!-- <button class="bouton1 mb-8" name="button" type="button"> Découvrir nos produits </button>
         -->
        <Boutton2  />
      </div>

      <div class="offredelasemaine w-full">
        <iframe class="videohompepage" src="https://www.youtube.com/embed/ez4zQr6CSnY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <div class="offre">
            <h4 class="h4vert mb-4">Offre de la semaine</h4>
            <p class="ptexte mb-2">Pok'Veggie </p>
            <p class="ptexte mb-2">7€</p>
            <Boutton1 />
            <!-- <button class="bouton2" name="button" type="button"> Acheter </button> -->
        </div>
      </div>
    </div>
  </header>
</template>

<script>
// @ is an alias to /src
import Boutton1 from '@/components/bouttons/Boutton1.vue'
import Boutton2 from '@/components/bouttons/Boutton2.vue'
import axios from 'axios'

export default {
name: 'Contenuhomepage',
components: {
Boutton1,
Boutton2,
},

data(){
    return {
        boutton1:[],
        boutton2:[],
        errors: [],
    }
},

// Fetches Details when the component is created.
created() {
axios.get('http://localhost:8080/plats.json')
.then(response => {
  // JSON responses are automatically parsed
  this.boutton1 = response.data.boutton1.
  this.boutton2 = response.data.boutton2
})
.catch(e => {
  this.errors.push(e)
})
}
}
</script>

<style scoped>
header{
  background-color: #62615C;
  width: 100%;
  height: 770px;
  z-index: -1;
  display: flex;
  flex-direction: row;
  gap: 20px;
}

/* .contenuhomepage{
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  position: relative;
  top: 50px;
} */

.offredelasemaine{
  background-color: #ffffff;
  border-radius:50px 5px 0px 0px;
/*   padding: 1rem;
  padding-bottom: 15%;
  position:relative;
  top: 25px; */
}

.videohompepage{
  border-radius:35px 5px 35px 5px;
  box-shadow: 1px 1px 3px 3px rgba(222, 162, 105, 0.5); 
/*   width: 97%;
  height: auto;
  margin-bottom: 20px; */
}

.offre{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.pokgourmet{
  height: auto;
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}



  .pgourmet{
      display: none; 
    }

  .navbar{
  padding:80px 5px 80px 5px;
  height:690px;
  width: 40px;
  background-color: #484526;
  border-radius: 15px 5px 15px 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
 /*  position: relative;
  left: 20px;
  top: 70px; */
} 

.navbar:hover{
  box-shadow: 1px 1px 3px 3px rgb(222, 162, 105, 0.2);
}

.contentmobile {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  height: 450px;
  }

.client{
  height: 80px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
}

.contactnavigation{
  height: 160px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
}

.contenuhomepage{
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  position: relative;
  top: 20px;
}

.offredelasemaine{
  padding: 1rem;
  padding-bottom: 15%;
  position:relative;
  top: 25px;
  height: 500px;
}

.videohompepage{
  width: 100%;
  height: 45%;
  margin-bottom: 20px;
}

.offre{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.pokgourmet{
  height: auto;
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}


/* TABLETTE */
@media screen and (min-width:481px) and (max-width:768px){
  header{
    width: 100%;
    height: 810px;
    margin: 0%;
    padding: 0%;
  }
  .navbar{
      display:none
    }

    .pgourmet{
      display: block; 
    }

  .logohomepage{
    display: none;
  }

  .contenuhomepage{
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      height: 600px;
      margin-left: 0%;
      margin-right: 0%; 
    }
  
    .offredelasemaine{
      display: flex;
      flex-direction: row-reverse;      
      justify-content: space-evenly;
      align-items: center;
      width: 80%;
      height: 350px;
      border-radius: 0px 5px 50px 0px;
      position: relative;
      left: -120px;
      padding: 50px;
    }

    .offre{
      margin-left: 20px;
      margin-right: 20px;
    }

    .videohompepage{
      width: 50%;
      height: 100%;
    }
  
    .pokgourmet{
      width: 90%;
      height: 350px;
      display: flex;
      align-items:flex-start;
      margin-left: 0%;
      margin-top: 5%;
    }
}

/* ORDINATEUR */
@media screen and (min-width:768px) and (max-width:2570px){

  .navbar{
      display:none
    }

  header{
      width: 100%;
      margin: 0%;
      padding: 150px 0;
    }

    .pgourmet{
      display: block; 
    }

    .logohomepage{
    display: none;
  }
  
    .contenuhomepage{
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-evenly;
      align-items: center;
      width: 100%;
      height: 100%;
      margin-left: 0%;
      margin-right: 0%;
    }
  
    .offredelasemaine{
      display: flex;
      flex-direction: row-reverse;
      justify-content: center;
      align-items: center;
      width: 70%;
      height: 500px;
      padding: 0%;
      padding-right: 20px;
      position: relative;
      left: -100px;
      border-radius: 0px 5px 50px 0px;
      box-shadow: 1px 1px 3px 3px rgba(222, 162, 105, 0.3); 
    }
  
    .pokgourmet{
      width: 50%;
      height: 500px;
      margin-right: 150px;
      margin-left: 50px;
      justify-content: space-around;
      align-items: flex-start;
    }
  
    .videohompepage{
      height: 400px;
      width: 60%;
      margin-bottom: 0px;
      border-radius:30px 5px 30px 5px;  
    }
  
    .offre{
      margin-left: 70px;
      width: 30%;
    }
}
</style>
