<template>
  <div class="plat p-12 shrink-0 scroll-ml-4 snap-center md:shrink ">
      <span class="sm:w-40">
          <h4 class="h4vert mb-4"> {{soustitre}}</h4>
          <p class="ptexteplat pr-12">{{texte}}</p>
      </span>
      <img class="imageplat w-32 rounded-full" :src="require(`@/assets/images/${image}`)" alt="Plat saumon"/>
      <button> {{button}} </button>
  </div>

</template>

<script>
export default {
name: 'Sectionplats',
props: {
id: Number,
soustitre: String,
texte: String,
image: String,
button: String
}
}
</script>



<style scoped>

.plat{
background-image: url("../../assets/images/fondblanc.svg");
background-repeat: no-repeat;
margin-right: 80px;
width: 264px;
height: 320px;
padding-top: 40px;
padding-bottom: 0px;
}

.plat img{
position: relative;
top: -210px;
left: 150px;
z-index: 1;
box-shadow: 2px 2px 3px 3px rgb(215, 157, 102, 0.4);
}


/* TABLETTE */
@media screen and (min-width:481px) and (max-width:768px){



.plat{
width: 264px;
padding-top: 60px;
margin-right: 0%;
margin-left: 0%;
}

.plat img{
width: 148px;
border-radius: 50%;
position: relative;
top: -170px;
left: 150px;
z-index: 1;
}

.ptexteplat{
width: 200px;
}

}


/* LAPTOP ET DESKTOP */
@media screen and (min-width:769px) and (max-width:2570px){


.plat{
width: 344px;
padding: 70px;
margin-right: 150px;
}

.imageplat{
width: 200px;
border-radius: 50%;
position: relative;
top: -180px;
left: 180px;
z-index: 1;
}
}

</style>