<template>
<div>
<div class="content">
<label  class="label">Commande</label> 
<br>
<label class="label">nom du produit:</label> <input type="text" class="input">
<br><br><label class="label">Quantite:</label>    
<input type="number" class="input"><br><br>
<button @click="annulerCommande()" class="button">Annuler</button>
<button class="button">Enregistrer</button>
</div>
</div>
</template>
<script>
     export default{
        data(){
            return{
                
            }

        },
        methods:{
            annulerCommande(){
                this.$emit("annuler",{"annuler":false})
            }
        }
     }
</script>
<style>
.label{
    color: white;
}
.content{
    width: 580px;
    height: 380px;
    background-color: black;
}
.input{
    margin-left: 35px;
}
.button{
    background-color: white;
    width: 170px;
    height: 50px;
    color: black;
    margin-left: 320px;
}
</style>