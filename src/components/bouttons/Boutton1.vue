<template>
    <div class="flex space-x-2 justify-center">
        <button
            type="button"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            class="boutton1 h5blanc inline-block px-6 py-2.5  text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-white hover:shadow-lg focus:bg-white focus:shadow-lg focus:outline-none focus:ring-0 active:bg-white active:shadow-lg transition duration-150 ease-in-out"
        >Acheter</button>
    </div>
</template>



<style scoped>
.boutton1{
    background-color: rgb(242, 182, 126);
    border: solid 2px rgb(242, 182, 126);
    border-radius:10px 3px 10px 3px;
}

.boutton1:hover{
    color:rgb(72, 69, 38);
    background-color: rgb(255, 255, 255);
    border:solid 2px #484526;
    box-shadow: 9px 9px 12px 6px
    rgba(249, 172, 100, 0.2);
}
</style>