<template>
    <div class="h extras mt-5">
        <h3 class="h3vert ml-4 sm:mx-4 mb-24"> Nos extras </h3>
    </div>
    <div class="nosextras h-80 mx-4">
        <div class="pic-ctn">
          <div class="img image1">
            <img id="img1" src="@/assets/images/boisson.jpg" alt="boissons">
            <h4 class="h4marron mt-4 text-center"> Boissons </h4>
          </div>
          <div class="img image2 mx-4">
            <img id="img2" src="@/assets/images/entree.jpg" alt="avocat">
            <h4 class="h4marron mt-4 text-center"> Entrées </h4>
          </div>
          <div class="img image3">
            <img id="img3" src="@/assets/images/fruit.jpg" alt="fruits">
            <h4 class="h4marron mt-4 text-center"> Desserts </h4>
          </div>
        </div>
        
        <div class="infos w-64 h-80">
          <div class="flex align-center">
            <p class="h5blanc informations mb-2 p-1">Some quick example text to build on the card title and make up the bulk of the card'scontent. Some quick example text to build on the card title and make up the bulk of the card'scontent.</p>
            <a class="h5marron underline " href="#"> lien</a>
          </div>
        </div>
    </div>
</template>

<style scoped>
.nosextras{
  background-image:url("../../assets/images/fond-vert.svg");
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.infos{
  background-color: #62615C;
  padding: 5%;
  position: relative;
  top:-10px ;
  border-radius: 5%; 
  box-shadow: 2px 2px 3px 3px rgb(215, 157, 102, 0.2);
}

.infos .flex {
  color: #ffffff;
  flex-direction: column;
  justify-content: space-between;
}

 /* MOBILE */
 @media screen and (min-width: 320px) and (max-width:480px){

  @keyframes display {
    0% {
      transform: translateX(200px);
      opacity: 0;
    }
    10% {
      transform: translateX(0);
      opacity: 1;
    }
    20% {
      transform: translateX(0);
      opacity: 1;
    }
    30% {
      transform: translateX(-200px);
      opacity: 0;
    }
    100% {
      transform: translateX(-200px);
      opacity: 0;
    }
  }
  
  .pic-ctn {
    position: relative;
    top:-190px ;
    left: 40px;
    width: 25vw;
    height: 75px;
    margin-top: 15vh;
    border-radius: 25%;
  }
  
  .pic-ctn > .img {
    position: absolute;
    top: 0;
    width: 130px;
    left: calc(50% - 100px);
    opacity: 0;
    animation: display 10s infinite;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
  }
  
  .pic-ctn img{
      border-radius: 50%;
  }
  .img:nth-child(2) {
    animation-delay: 2s;
  }
  .img:nth-child(3) {
    animation-delay: 4s;
  }
  .img:nth-child(4) {
    animation-delay: 6s;
  }
  .img:nth-child(5) {
    animation-delay: 8s;
  }
 }


/*  TABLETTE */
@media screen and (min-width:481px) and (max-width:768px){
  .extras{
    margin-left: 50px;
    margin-bottom: 100px;
  }
  
  .extras .h3vert{
    margin-bottom: 70px;
  }
  
  .nosextras{
    height: 300px;
    background-position: center;
    margin: 0px;
  }
  
  .infos{
    background-color: #62615C;
    padding: 4%;
    width: 320px;
    height: 370px;
    position: relative;
    top: 40px;
    left: 100px;
    border-radius: 15px;
  }
  
  .pic-ctn{
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: center;
  }
  
  .pic-ctn > .img {
    width: 160px;
  }
  
  .image1{
    justify-content: center;
    align-items: center;
  }
  
  .image2{
    justify-content: center;
    align-items: center; 
    position: relative;
    top: -40px;
  }
  
  .image3{
    position: relative;
    top: -70px;
  }
  
  #img1{
    border-radius: 50%;
    box-shadow: 2px 2px 3px 3px rgb(215, 157, 102, 0.4);
  }
  #img2{
    border-radius: 50%;
    box-shadow: 2px 2px 3px 3px rgb(215, 157, 102, 0.4);
  }
  
  #img3{
    border-radius: 50%;
    box-shadow: 2px 2px 3px 3px rgb(215, 157, 102, 0.4);
  }
}


/* ORDINATEUR */
@media screen and (min-width:769px) and (max-width:2570px){
 
  .extras{
    margin-left: 100px;
    margin-bottom: 150px;
  }
  .nosextras{
    height: 460px;
    width: 100%;
    background-position: center;
    margin: 0px;
    margin-bottom: 300px;
  }
  
  .infos{
    background-color: #62615C;
    padding: 2%;
    width: 500px;
    height: auto;
    position: relative;
    top: 100px;
    left: 100px;
    border-radius: 15px;
  }
  
  .pic-ctn{
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
  
  .pic-ctn > .img {
    width: 210px;
  }
  
  .image1{
    justify-content: center;
    align-items: center;
  }
  
  .image2{
    justify-content: center;
    align-items: center; 
    position: relative;
    top: -40px;
  }
  
  .image3{
    position: relative;
    top: -70px;
  }
  
  #img1{
    border-radius: 50%;
    box-shadow: 2px 2px 3px 3px rgb(215, 157, 102, 0.4);
  }

  #img2{
    border-radius: 50%;
    box-shadow: 2px 2px 3px 3px rgb(215, 157, 102, 0.4);
  }
  
  #img3{
    border-radius: 50%;
    box-shadow: 2px 2px 3px 3px rgb(215, 157, 102, 0.4);
  }
}


</style>