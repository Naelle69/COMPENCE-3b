<template>
    <div class="avantages">
        <div class="icones2">
          <div class="imageavantages">
            <img class="iconesavantages" src="@/assets/images/svg-icones/livraisonofferte.svg"/>
          </div>
          <h3 class="h4vert text"> Livraison offerte dès 60€ </h3>
        </div>
        <div class="icones2">
          <div class="imageavantages">
            <img class="iconesavantages" src="@/assets/images/svg-icones/recyclage.svg" />
          </div>
          <h3 class="h4vert text"> 100% recyclables </h3>
        </div>
        <div class="icones2">
          <div class="imageavantages">
            <img class="iconesavantages" src="@/assets/images/svg-icones/directionadresses.svg" />
          </div>
          <h3 class="h4vert"> 15 adresses en Frances</h3>
        </div>
        <div class="icones2">
          <div class="imageavantages">
            <img class="iconesavantages" src="@/assets/images/svg-icones/payementsecurise.svg"/>
          </div>
          <h3 class="h4vert"> Paiement sécurisé </h3>
        </div>
        <div class="icones2">
          <div class="imageavantages">
            <img class="iconesavantages" src="@/assets/images/svg-icones/retraitexpress.svg" />
          </div>
          <h3 class="h4vert"> Retrait express </h3>
        </div>
    </div>
</template>


<style scoped>
.icones2{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

/* MOBILE */
@media screen and (min-width: 320px) and (max-width:480px){
.avantages{
  height: auto;
  width: auto;
  margin-top: 50px;
}

.icones2{
  margin-bottom: 40px;
}

.imageavantages{
  border: solid 2px rgb(72,69,38);
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
}

.iconesavantages{
  width: 36px;
  height: 36px;
}
}


/* TABLETTE */
@media screen and (min-width:481px) and (max-width:768px){
    .avantages{
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 50px;
}

.icones2{
  width: 114px;
}

.imageavantages{
  border: solid 2px rgb(72,69,38);
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
}

.iconesavantages{
  width: 36px;
  height: 36px;
  }
}


/* ORDINATEUR */
@media screen and (min-width:769px) and (max-width:2570px){  
    .avantages{
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 50px;
}

.imageavantages{
  border: solid 2px rgb(72,69,38);
  width: 120px;
  height: 120px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
}

.iconesavantages{
  width: 70px;
  height: 70px;
}
}


</style>