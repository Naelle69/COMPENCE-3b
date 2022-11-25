<template>
    <div class="promotion flex justify-content-center align-center mt-16">
        <div class="exclusivite p-6 mx-6 w-80 h-80 mx-6 mb-16 flex justify-content-center align-center ">
            <h4 class="h3marron mb-4"> Exclusivité web </h4>
            <p class="h3vert mb-4"> Jusqu'à -10% sur nos plats pour les familles nombreuses*</p>
            <p class="h3vert"> Et, jusqu'à -15% sur notre carte des desserts pour tout nos clients*</p>
        </div>
        <div class="galleryimages">
            <section class="gallerypromotion overflow-hidden text-gray-700">
                <div class="container mx-auto">
                    <div class="container2 flex flex-wrap -m-1 md:-m-2">
                        <div class="flex flex-wrap w-1/2">
                            <div class="w-1/2 p-1 md:p-2">
                                <img alt="gallery" class="gallerie6 block object-cover object-center w-full h-full"
                                src="@/assets/images/gallerie-image6.jpg">
                            </div>
                            <div class="w-1/2 p-1 md:p-2">
                                <img alt="gallery" class=" gallerie4 block object-cover object-center w-full h-full"
                                src="@/assets/images/gallerie-image4.jpg">
                            </div>
                            <div class="w-full p-1 md:p-2">
                                <img alt="gallery" class="gallerie1 block object-cover object-center w-full h-full"
                                src="@/assets/images/gallerie-image1.jpg">
                            </div>
                        </div>
                        <div class="flex flex-wrap w-1/2">
                            <div class="w-full p-1 md:p-2">
                                <img alt="gallery" class="gallerie2 block object-cover object-center w-full h-full"
                                src="@/assets/images/gallerie-image2.jpg">
                            </div>
                            <div class="w-1/2 p-1 md:p-2">
                                <img alt="gallery" class="gallerie5 block object-cover object-center w-full h-full"
                                src="@/assets/images/gallerie-image5.jpg">
                            </div>
                            <div class="w-1/2 p-1 md:p-2">
                                <img alt="gallery" class="gallerie3 block object-cover object-center w-full h-full"
                                src="@/assets/images/gallerie-image3.png">
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<style scoped>
.exclusivite{
  background-color: #ffffff;
  border-radius: 50px 5px 50px 5px;
  box-shadow: 3px 3px 5px 5px rgb(215, 157, 102, 0.2);
  }

 /* MOBILE */
 .exclusivite{
  flex-direction: column;
}

 @media screen and (min-width: 320px) and (max-width:480px){
.gallerypromotion{
display: none;
} 

.exclusivite{
  flex-direction: column;
  padding: 5%;
  width: 100%;
  height: auto;
}
}


/* LAPTOP ET DESKTOP */
@media screen and (min-width:769px) and (max-width:2570px){
    /* promotion */
  .exclusivite{
    padding: 50px;
    margin: 0%;
    width: 40%;
    height: auto;
  }
  
  .promotion{
    margin: 100px;
    justify-content: center;
    align-items: center;
    height: auto;
    gap: 50px;

  }
  
  .galleryimages{
    width: 60%;
  }
  
  .gallerie6{
    border-radius:50px 0px 0px 0px;
  }
  
  .gallerie1{
    border-radius:0px 0px 0px 10px;
  }
  
  .gallerie2{
    border-radius:0px 10px 0px 0px;
  }
  
  .gallerie3{
    border-radius:0px 0px 50px 0px;
  }
}


 /* Tablette */
 @media screen and (min-width:481px) and (max-width:768px){
      /* promotion */
  .exclusivite{
    padding: 3%;
    width: 40%;
    height: auto;
    margin: 0%;

  }
  
  .exclusivite .h3marron{
    font-size: 14px;
  }
  
  .exclusivite .h3vert{
    font-size: 14px;
  }
  
  .promotion{
    margin: 50px;
    margin-top: 200px;
    gap: 15px;
    justify-content: center;
  }
  
  .container{
    padding: 0%;
    width: 100%;
  } 
  
  .galleryimages{
    width: 60%;
  } 

  .gallerie6{
    border-radius:40px 0px 0px 0px;
  }
  
  .gallerie1{
    border-radius:0px 0px 0px 10px;
  }
  
  .gallerie2{
    border-radius:0px 10px 0px 0px;
  }
  
  .gallerie3{
    border-radius:0px 0px 40px 0px;
  }
 }
</style>