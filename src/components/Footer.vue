<template>
    <footer class="conteneurprincipal w-full text-center text-white">
        <div class="conteneur1">
          <div class="newsletters1 flex justify-center mb-10">
            <div class="newsletters block p-6 max-w-sm max-w-md max-w-lg" style="background-color: rgba(72, 69, 38);">
              <h2 class="h2marron leading-tight  mb-4">Newsletter</h2>
              <p class="h3blanc text-base mb-4">Inscrivez-vous à notre newsletter pour ne rien rater de nos bons plans</p>
              <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
            </div>
          </div>
  
          <div class="entreprise">
            <div class="contacts-mentions">
              <div class="lentreprise flex">
                <h4 class="h4marron uppercase mb-2 flex justify-center md:justify-start">L'ENTREPRISE</h4> 
               <!--  <div class="entreprise1">
                  <a class="footerlogo flex justify-center max-w-sm mb-2" href="#">
                    <img src="@/assets/images/logoblancsansfond.svg" alt="POK'GOURMET Logo" />
                  </a>
                </div>  -->
                <div class="lentreprise2"> 
                  <p class="mb-1">
                    <a href="#!" class="ptexte2">Concept</a>
                  </p>
                  <p class="mb-1">
                    <a href="#!" class="ptexte2">Recrutement</a>
                  </p>
                  <p class="mb-1">
                    <a href="#!" class="ptexte2">Evènements</a>
                  </p>
                  <p class="mb-1">
                    <a href="#!" class="ptexte2">Plan du site</a>
                  </p>
                  <p class="mb-10">
                    <a href="#!" class="ptexte2">FAQS</a>
                  </p>
                </div>
              </div>
              <div class="contactez-nous">
                <h4 class="h4marron uppercase mb-2 md:justify-start">CONTACT</h4>
                <div class="lentreprise3">
                  <p class="nouscontacter ptexte2 flex items-center justify-center md:justify-start mb-1">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="home"
                      class="w-6 mr-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                      <path fill="currentColor"
                        d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z">
                      </path>
                    </svg>
                    9 rue Marc SEGUIN, 94000 Créteil
                  </p>
                  <p class="nouscontacter ptexte2 flex items-center justify-center md:justify-start mb-1">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope"
                      class="w-4 mr-4" role="img" xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512">
                      <path fill="currentColor"
                        d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z">
                      </path>
                    </svg>
                    contact@pokgourmet.fr
                  </p>
                  <p class="nouscontacter ptexte2 flex items-center justify-center md:justify-start mb-1">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="phone"
                      class="w-4 mr-4" role="img" xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512">
                      <path fill="currentColor"
                        d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z">
                      </path>
                    </svg>
                    +33 4 22 33 52 54
                  </p>
                  <p class="nouscontacter ptexte2 flex items-center justify-center md:justify-start mb-2">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="print"
                      class="w-4 mr-4" role="img" xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512">
                      <path fill="currentColor"
                        d="M448 192V77.25c0-8.49-3.37-16.62-9.37-22.63L393.37 9.37c-6-6-14.14-9.37-22.63-9.37H96C78.33 0 64 14.33 64 32v160c-35.35 0-64 28.65-64 64v112c0 8.84 7.16 16 16 16h48v96c0 17.67 14.33 32 32 32h320c17.67 0 32-14.33 32-32v-96h48c8.84 0 16-7.16 16-16V256c0-35.35-28.65-64-64-64zm-64 256H128v-96h256v96zm0-224H128V64h192v48c0 8.84 7.16 16 16 16h48v96zm48 72c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z">
                      </path>
                    </svg>
                    +33 4 22 33 52 55
                  </p>
                  <div class="reseauxsociaux">
                    <div class=" justify-center mb-10">
                      <a href="#!" type="button" class="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1">
                        <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f"
                          class="w-2 h-full mx-auto" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                          <path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                        </svg>
                      </a>
                    
                      <a href="#!" type="button" class="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1">
                        <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram" class="w-3 h-full mx-auto" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                          <path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                        </svg>
                      </a>
                
                      <a href="#!" type="button" class="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1">
                        <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin-in" class="w-3 h-full mx-auto" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                          <path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                        </svg>
                      </a>
          
                      <a href="#!" type="button" class="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1"> 
                        <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram" class="w-3 h-full mx-auto" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                          <path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
        
              <div class="mentionslegales">
                <h4 class="h4marron uppercase mb-2 flex justify-center md:justify-start">MENTIONS LEGALES</h4>
                <div class="lentreprise3">    
                  <p class="mb-1">
                    <a href="#!" class="ptexte2">Conditions générales des ventes</a>
                  </p>
                  <p class="mb-1">
                    <a href="#!" class="ptexte2">Politiques de confidentialité</a>
                  </p>
                  <p class="mb-1">
                    <a href="#!" class="ptexte2">Cookies</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <div class="conteneur2 mb-10">
          <div class="container w-screen">
            <div class="grid lg:grid-cols-6 md:grid-cols-3 gap-4">
              <div class="lg:mb-0 mb-6">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp"
                  class="imagefooter w-80 rounded-md shadow-lg"/>
              </div>
              <div class="lg:mb-0 mb-6">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/fluid/city/111.webp"
                  class="imagefooter w-80 rounded-md shadow-lg"/>
              </div>
              <div class="lg:mb-0 mb-6">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/fluid/city/112.webp"
                  class="imagefooter w-80 rounded-md shadow-lg"/>
              </div>
              <div class="lg:mb-0 mb-6">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/fluid/city/114.webp"
                  class="imagefooter w-80 rounded-md shadow-lg"/>
              </div>
              <div class="lg:mb-0 mb-6">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/fluid/city/115.webp"
                  class="imagefooter w-80 rounded-md shadow-lg"/>
              </div>
              <div class="lg:mb-0 mb-6">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/fluid/city/116.webp"
                  class="imagefooter w-80 rounded-md shadow-lg"/>
              </div>
            </div>
          </div>
        
          <div class="h5marron copyright C text-center p-4 mb-10" style="background-color: rgba(72, 69, 38);">
            © Copyright 2022-2023:
            <a class="droits h5marron" href="https://tailwind-elements.com/"> pokgourmet.fr Tous drois résèrvés. Site édité par Naëlle IBINGA</a>
          </div>
        </div>
    </footer>
</template>


<style scoped>

  footer{
  background-color: rgb(72, 69, 38);
  margin-top: 90px;
}

.newsletters1{
  display: flex;
  justify-content: center;
}

.newsletters{
  border-radius: 50px 5px 50px 5px;
  box-shadow: 3px 3px 5px 5px rgba(22, 22, 22, 0.15);
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 10%;
}

.lentreprise {
  align-items: center;
  flex-direction: column;
}
/* 
.footerlogo{
  width: 100px;
}
 */
.copyright{
  color:#D79D66
}

.nouscontacter{
  flex-direction: row;
  justify-content: center;
  text-align: center;
  width: auto;
}

.imagesfooter{
  display:none;
}

.grid{
    display: none;
  }

/* TABLETTE */
@media screen and (min-width:481px) and (max-width:768px){
    .contacts-mentions{
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-start;
  width: 100%;
  margin: 0%;
  text-align: start;
}

/* FOOTER */
.footerlogo{
  width: 40px;
  justify-content:flex-start;
}

.lentreprise{
  text-align: start;
  width: auto;
}

.contactez-nous{
  text-align: start;
  width: 26%;
}

.nouscontacter{
  text-align: start;
  justify-content: flex-start;
}

.mentionslegales{
  width: 30%;
}

.container .grid{
  display: flex;
  flex-direction: row;
  width: 90%;
}

.imagefooter{
  border-radius:15px 2px 15px 2px;
  box-shadow: 2px 2px 4px 4px rgba(22, 22, 22, 0.2);
}
}

@media screen and (min-width:769px) and (max-width:2570px){
  .conteneurprincipal{
  display: flex;
  flex-direction: column;
}

.conteneur1{
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  margin: 100px;
  padding-left: 300px;
}

.contacts-mentions{
  display: flex;
  column-gap: 50px;
  text-align: start;
}
.contactez-nous h4{
  margin-bottom: 50px;
}

.lentreprise{
  align-items: flex-start;
  width: auto;
} 

.lentreprise2{
  justify-content: flex-start;
  width: auto;
}

.lentreprise3{
  justify-content: flex-start;
}

.lentreprise3 .nouscontacter{
  justify-content: flex-start;
}

.newsletters{
  padding: 10%;
  margin: 0%;
}

.newsletters1{
  align-self: start;
  justify-content: flex-start;
}

.container .grid{
  width: 100%;
}

.imagefooter{
  border-radius:30px 5px 30px 5px;
  box-shadow: 2px 2px 4px 4px rgba(22, 22, 22, 0.2);
}
}

</style>