<template>
    <button @click="modal_add_produit=!modal_add_produit">Add produit</button>
    <AddProduct v-if="modal_add_produit" :productProp="productObj" ></AddProduct>
    <table>
    <tr>
        <th>Date</th>
        <th>Nom_produit</th>
        <th>Prix</th>
        <th>Quantite</th>
        <th>delete</th>
        
    </tr>
    <tr v-for="produit in produits" :key="produit.id">
       <td>{{produit.date}}</td>
       <td>{{produit.nom_produit}}</td>
       <td>{{produit.prix}}</td>
       <td>{{produit.quantite}}</td>
       <td> <button @click="modifierProduct(produit)">modifier</button> <button @click="supprimmerProduct(produit.id)">supprimer</button></td>
   </tr>
   

 </table>
</template>
<script>
import axios from "axios";
import AddProduct from "../components/AddProduct";
export default{
    data(){
        return{
            modal_add_produit:false,
            produits:[],
            productObj:null
        }
    },
    methods:{
        recupererProduit(){
            axios.get('http://127.0.0.1:8000/alimentation/produit/')
            .then((response)=>{
                this.produits=response.data
            })
            .catch((error)=>{
                console.log(error)
            })
        },
        supprimmerProduct(id){
            axios.delete('http://127.0.0.1:8000/alimentation/produit/'+id+"/")
            .then(()=>{
                alert("supprimer avec succes")
            }).catch((error)=>{
                console.log(error)
            })
        },
        modifierProduct(produit){
            this.$router.push("/produit/"+produit.id)
            this.modal_add_produit=true
            this.productObj=produit
            
        }
    },
    mounted(){
        this.recupererProduit()
    },  
    components:{
        AddProduct,
    }
}
</script>
<style>


</style>