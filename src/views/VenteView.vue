<template>
<button @click="modal_add_vente=!modal_add_vente">Vente</button>
<AddVente v-if="modal_add_vente"></AddVente>
<table>
    <tr>
        <td>Nom produit</td>
        <td>Quantite</td>
    </tr>
    <tr v-for=" ven in ventes" :key="ven.id">
        <td>{{ven.produit}}</td>
        <td>{{ven.quantite}}</td>
    </tr>

    
</table>
</template>
<script>
import axios from "axios";
import AddVente from "../components/AddVente";

export default{
     data(){
        return{
               modal_add_vente:false,
               ventes:[]
        }
     },

    methods:{
        getVente(){
            axios.get('http://127.0.0.1:8000/alimentation/vente/')
            .then((response)=>{
                this.ventes=response.data
            }).catch((error)=>{
                console.log(error)
            })
        }
    },
    components:{
        AddVente,
    },
    mounted(){
        this.getVente()
    }

}
</script>
<style>

</style>