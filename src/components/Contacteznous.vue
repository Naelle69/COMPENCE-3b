<template>
    <div class="contacteznous mx-4 my-10">
        <h2 class="h2marron mb-10">Nous contacter</h2>
        <div class="formulaire-map">
            <div class="bordure block p-6 rounded-lg shadow-lg bg-white">
                <form>
                    <div class="grid grid-cols-2 gap-4">
                        <div class="form-group mb-6">
                            <input type="text" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700
                            bg-white bg-clip-padding border border-solid border-gray-300 rounded transition
                            ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
                            aria-describedby="emailHelp123" placeholder="Nom">
                        </div>
                        <div class="form-group mb-6">
                            <input type="text" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700
                            bg-white bg-clip-padding border border-solid border-gray-300 rounded transition
                            ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput124"
                            aria-describedby="emailHelp124" placeholder="Prénom">
                        </div>
                    </div>
                    <div class="form-group mb-6">
                        <input type="email" class="form-control block w-full px-3 py-1.5
                        text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded
                        transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput8"
                        placeholder="Mail">
                    </div>
                    <div class="form-group mb-6">
                        <textarea class="form-control block w-full px-3 py-1.5
                            text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded
                            transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleFormControlTextarea13"
                            rows="3"
                            placeholder="Message">
                        </textarea>
                    </div>
                    <div class="form-group form-check text-center mb-6">
                        <input type="checkbox"
                        class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                        id="exampleCheck87" checked>
                        <label class="form-check-label inline-block text-gray-800" for="exampleCheck87">Send me a copy of this message</label>
                    </div>
                    <Boutton3/>
                    <!-- <button type="submit" class= "boutton
                    w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded
                    shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 
                    active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Envoyer</button> -->
                </form>
            </div>
            <div class="map d-flex w-full h-64 justify-content-center">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2628.7982815413593!2d2.433622515893346!3d48.785741179280485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e673449d8b48e3%3A0x83768eac6932ce9f!2s9%20Rue%20Marc%20Seguin%2C%2094000%20Cr%C3%A9teil!5e0!3m2!1sfr!2sfr!4v1664376805336!5m2!1sfr!2sfr" width="400" height="250" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import Boutton3 from '@/components/bouttons/Boutton3.vue'
import axios from 'axios'

export default {
name: 'Contacteznous',
components: {
Boutton3,
},

data(){
    return {
        boutton3:[],
        errors: [],
    }
},

// Fetches Details when the component is created.
created() {
axios.get('http://localhost:8080/plats.json')
.then(response => {
  // JSON responses are automatically parsed
  this.boutton3 = response.data.boutton3
})
.catch(e => {
  this.errors.push(e)
})
}
}
</script>



<style scoped>
.bordure{
  border: solid 2px  rgb(72,69,38);
  border-radius: 30px 5px 30px 5px;
}

.form-control{
  border: solid 0.5px  rgb(72,69,38);
  border-radius: 10px 2px 10px 2px;
}

.boutton{
  margin-bottom: 20px;
}
.map iframe{
  border-radius: 30px 5px 30px 5px;
  box-shadow: 3px 3px 5px 5px rgb(215, 157, 102, 0.3);
}
/* MOBILE */
@media screen and (min-width: 320px) and (max-width:480px){
  .contacteznous{
  margin-top: 50px;
}

.formulaire-map{
  display: flex;
  flex-direction: column;
  align-items: center;
}

.bordure{
  border: solid 2px  rgb(72,69,38);
  border-radius: 30px 5px 30px 5px;
  width: 100%;
  padding: 3%;
  margin-bottom: 30px;
}

.form-control{
  border: solid 0.5px  rgb(72,69,38);
  border-radius: 10px 2px 10px 2px;
  width: 100%;
}

.boutton{
  margin-bottom: 20px;
}
.map iframe{
  border-radius: 30px 5px 30px 5px;
  box-shadow: 3px 3px 5px 5px rgb(215, 157, 102, 0.3);
  height: 250px;
  width: 80%;
}
}

/* LAPTOP ET DESKTOP */
@media screen and (min-width:769px) and (max-width:2570px){
.formulaire-map{
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
}

.form-control{
  width: 100%;
}  

.contacteznous{
  margin-bottom: 100px;
  height: auto;
}

.contacteznous .h2marron{
  margin-left: 100px;
  margin-top: 100px;
  margin-bottom: 0px;
}

.bordure{
  width: 60%;
  height: auto;
    padding: 2%;
}

.map iframe{
  height: 400px;
  width: 40%;
  align-items: center;
}
}


/* Tablette */
@media screen and (min-width:481px) and (max-width:768px){
  .formulaire-map{
  display: flex;
  flex-direction: column;
  align-items: center;
}

.bordure{
  border: solid 2px  rgb(72,69,38);
  border-radius: 30px 5px 30px 5px;
  width: 80%;
  height: 420px;
  padding: 20px;
}

.form-control{
  border: solid 0.5px  rgb(72,69,38);
  border-radius: 10px 2px 10px 2px;
  width: 100%;
}

.map iframe{
  border-radius: 30px 5px 30px 5px;
  box-shadow: 3px 3px 5px 5px rgb(215, 157, 102, 0.3);
  height: 250px;
  width: 70%;
  position: relative;
  top: -50px;
  display: flex;
  align-items: center;
}
}
</style>