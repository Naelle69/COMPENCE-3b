<template>
    <nav class="navbarweb z-10">
      <a class="navbarlogo" href="#">
        <img src="@/assets/images/logobeige.svg" width="90" alt="POK'GOURMET Logo"/>
      </a>

      <ul class="menunav justify-content-space-between" width="400">
        <li class="menunav-item">
          <a class="h5menu" href="#">Notre concept</a>
        </li>
        <li class="menunav-item">
          <a class="h5menu" href="#">Nos offres</a>
        </li>
        <li class="menunav-item">
          <a class="h5menu disabled">Idées recettes</a>
        </li>
        <li class="menunav-item">
          <a class="h5menu disabled">
            <router-link to="/Blog">Blog conseils</router-link>
          </a>
        </li>
      </ul>

      <div class="client">
        <!-- Icon -->
        <a class="panier" href="#">
          <img src="@/assets/images/svg-icones/paniermarron.svg" height="30" alt="POK'GOURMET Logo"/>
        </a>
        <a class="moncompte">
          <img src="@/assets/images/svg-icones/moncompte.svg" height="30" alt="POK'GOURMET Logo"/>
        </a>
      </div>
    </nav>
</template>

<style scoped>

.client{
  height: 80px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
}

.navbarweb{
   display:none;
}
  


/* LAPTOP ET DESKTOP */
@media screen and (min-width:769px) and (max-width:2570px){

  .navbarweb{
    position: fixed;
    top: 10px;
  }

  .navbarweb{
    height: 100px;
    width: 90%;
    background-color: #484526;
    border-radius:30px 5px 30px 5px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-top: 50px;
    margin-left: 100px;
    margin-right: 100px;
  }

  .navbarweb:hover{
    box-shadow: 1px 1px 3px 3px rgb(222, 162, 105, 0.2);
  }
  
  .menunav{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 500px;
  }

  .client{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100px;
  }

  .contentweb{
    padding:  30px 60px 30px 60px;
    height: auto;
    width: 90%;
    border-radius:30px 5px 30px 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 100px;
  }
}

/* TABLETTE */
@media screen and (min-width:481px) and (max-width:768px){
  
    .navbarweb{
      height: 80px;
      width: 90%;
      background-color: #484526;
      border-radius:30px 5px 30px 5px;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      margin-left: 5%;
      margin-right: 5%;
      position: fixed;
      top: 20px;
    }
  
    .navbarweb:hover{
      box-shadow: 1px 1px 3px 3px rgb(222, 162, 105, 0.2);
    }
    
    .navbarlogo{
      width: 60px;
    }

    .menunav{
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      width: 450px;
    }
  
    .client{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 60px;
    }
}

/* * MOBILE * */
@media screen and (min-width: 320px) and (max-width:480px){
  .navbarweb{
    display:none;
  }
}
</style>