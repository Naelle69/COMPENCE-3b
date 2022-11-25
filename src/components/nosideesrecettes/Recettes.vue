<template>
        <div class="recettes shrink-0 scroll-ml-4 snap-center md:shrink">
          <img class="imagerecette" :src="require(`@/assets/images/${image}`)" alt="Recette"/>
          <div class="ideetext text-center">
            <h4 class="h4vert mb-2">{{titre}}</h4>
            <h4 class="h4blanc">{{soustitre}} </h4>
          </div>
        </div>
</template>

<script>
export default {
  name: 'Recettes',
  props: {
    id: Number,
    image: String,
    titre: String,
    soustitre: String
  }
}
</script>


<style scoped>

.recettes{
  background-image: url("../../assets/images/grandfond.svg");
  background-repeat: no-repeat;
  background-position: center;
  width: 300px;
  height: 350px;
  padding: 3%;
}

.recettes:hover{ 
  background-image: url("../../assets/images/grandfondvert.svg");
  background-position: center;
}

/* .ideetext{
  position: relative;
  top: 90px;
  right: 10px;
} */

.ideetext .h4vert:hover{
  color:#D79D66
}


.imagerecette{
  width: 120px;
  border-radius: 50%;
  position: relative;
  left: 30px;
}



/* TABLETTE */
@media screen and (min-width:481px) and (max-width:768px){

}


/* LAPTOP ET DESKTOP */
@media screen and (min-width:769px) and (max-width:2570px){

.recettes{
  width: 480px;
  height: 600px;
}

/* .texterecettes{
  font-size: 16px;
} */

.ideetext{
  position: relative;
  top: 130px;
/*   font-size: 16px; */
}

.imagerecette{
  width: 180px;
  border-radius: 50%;
  position: relative;
  left: 100px;
}
}

</style>