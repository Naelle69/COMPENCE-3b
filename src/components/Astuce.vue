<template>
    <div class="gradient mx-0 mb-16 block1 text-center">
        <div class="block">
          <h2 class="h2blanc mb-4">Astuces éco</h2>
          <h3 class="h3vert mb-2">Réalisez des économies sur vos dépenses alimentaires</h3>
          <p class="ptexte mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, ut auctor lectus. At enim aucacilisis eget. Condimenpellentesque risus, tincidunt. Pro morbi tempor, curabitur neque quam convallis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, ut auctor lectus . Condimenpellentesque risus, tincidunt. Pro morbi tempor, curabitur neque quam convallis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, ut auctor lectus . 
          </p>
          <button class="bouton1" name="button" type="button"> Découvrir toutes nos astuces </button>
        </div>
    </div>
</template>

<style scoped>
.ptexte {
 font-weight: bold;
}

.gradient{
  width: 100%;
  height: auto;
  background: rgb(72,69,38);
  background: linear-gradient(90deg, rgba(72,69,38,1) 0%, rgba(215,157,102,1) 50%, rgba(98,97,92,1) 100%);
  align-items: center;
  padding: 15%;
  margin: 0%;
}

/* LAPTOP ET DESKTOP */
@media screen and (min-width:769px) and (max-width:2570px){
    .gradient{
  width: 100%;
  height: 400px;
  padding: 0%;
}

.block1{
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 10%;
  padding-right: 10%;
}

}

/* Tablette */
@media screen and (min-width:481px) and (max-width:768px){

}
</style>