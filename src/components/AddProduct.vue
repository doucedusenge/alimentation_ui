<template>

    <div class="body">
     <p class="pro11">Add product</p>
    
    <div class="pro3">
    <div class="pro2 prod4">Nom_produit:
        
     <input type="text" v-model="nom_produit" class="prod1"><br>
    </div>
    <div class="pro2 prod5">Prix:
        <input type="text" v-model="prix" class="prod1">
    </div>
   
    <div class="pro2 prod4">Quantite:
    <input type="text" v-model="quantite" class="prod1">

    </div>
 <table>
   <tr>
       <th>Date</th>
       <th>Nom_produit</th>
       <th>Prix</th>
   </tr>

   <tr>
       <td></td>
       <td></td>
       <td></td>
   </tr>
   <tr>
       <td></td>
       <td></td>
       <td></td>
   </tr>

 </table>

    
    </div>
    <button v-if="productProp" @click="modifier()">modifier</button>
    <button v-else class="button" @click=" add_product()">Enregistrer</button>

    </div>
</template>
<script>
import axios from 'axios'
export default{
    data(){
        return{
            nom_produit:"",
            prix:0,
            quantite:0
        }
    },
    props:["productProp"],
    mounted(){
        if(this.productProp){
            this.nom_produit=this.productProp.nom_produit
            this.prix=this.productProp.prix
            this.quantite=this.productProp.quantite
        }
    },
    methods:{
        modifier(){
            let data = new FormData()
            data.append("nom_produit", this.nom_produit)
            data.append("prix",this.prix)
            data.append("quantite",this.quantite)
            axios.put('http://127.0.0.1:8000/alimentation/produit/'+this.productProp.id+"/",data)
            .then((response)=>{
                alert("Ok")
                console.log(response.data)
            }).catch((error)=>{
                console.log(error)
            })
        },
        add_product(){
            let data = new FormData()
            data.append("nom_produit", this.nom_produit)
            data.append("prix",this.prix)
            data.append("quantite",this.quantite)
            axios.post('http://127.0.0.1:8000/alimentation/produit/',data)
            .then((response)=>{
                alert("Ok")
                console.log(response.data)
            }).catch((error)=>{
                console.log(error)
            })
        }
       
    }
}
</script>
<style scoped>
.body{
    background-color: black;
}
.pro11{
    font-size: 55px;
    margin-left: 260px;
    
    background-color: black;
    color: orangered;
}
.pro3{
    margin-left: 220px;
    margin-top: 35px;
}
.pro2{
    color: orangered;

    font-size: 37px;
    font-style: italic;
}
.prod1{
    font-size: 1em;
}
.prod5{
    margin-top: 20px;
    margin-left: 125px;
}
.prod4{
    margin-top: 20px;
}
.button{
    color: orangered;
    margin-left:450px;
    margin-top: 89px;
    font-size: 28px;
    background-color: white;
}
</style>