<template>
<div>
<div class="content">
           <label  class="label">vente</label> 
            <br>
 <label class="label">nom du produit:</label> <input type="text" v-model="nom_produit" class="input">
 <br><br><label class="label">Quantite:</label>    
 <input type="number" v-model="quantite" class="input"><br><br>
<br><button class="button" @click="recupererVente()">Enregistrer</button>
</div>
</div>
</template>
<script>
import axios from 'axios';

export default{
    data(){
        return{
            nom_produit:"",
            quantite:0
        }
    },
    methods:{
            recupererVente(){
                 let data=new FormData()
                data.append("produit",this.nom_produit)
                data.append("quantite",this.quantite)
                axios.post('http://127.0.0.1:8000/alimentation/vente/',data)
                .then((response)=>{
                alert("bravo")
                console.log(response.data)
                }).catch((error)=>{
                console.log(error)
                })
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
    width: 70px;
    height: 20px;
    color: black;
}
</style>