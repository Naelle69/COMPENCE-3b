<template>
    <div class="flex items-center justify-center">
        <div class="boutton inline-flex shadow-md hover:shadow-lg focus:shadow-lg" role="group">
            <button type="button" class="partie1 h5blanc inline-block px-6 py-2.5  text-white font-medium text-xs leading-tight uppercase   focus:outline-none focus:ring-0  transition duration-150 ease-in-out">Envoyez</button>
            <button type="button" class="partie2  h5vert inline-block px-6 py-2.5  focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Entrez votre adresse mail</button>
        </div>
    </div>
</template>

<style scoped>

.boutton{
    border: solid 2px #484526;
    border-radius: 14px 3px 10px 6px; 
}

/* .boutton :hover{
    box-shadow: 2px 2px 3px 3px rgb(215, 157, 102, 0.4);
} */


.partie1{
    background-color: rgb(242, 182, 126);
    border-radius:10px 0px 10px 3px;
    border: solid 1px #484526;
}

.partie2{
    background-color: white;
    border-radius: 0px 3px 10px 3px;  
}

</style>