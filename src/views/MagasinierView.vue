<template>
<button @click=" modal_add_magasinier=! modal_add_magasinier">AddMagasiniers</button>
<AddMagas v-if=" modal_add_magasinier"></AddMagas>
    <table>
   <tr>
       <th>nom</th>
       <th>prenom</th>
       <th>telephone</th>
       <th>delete</th>
   </tr>

   <tr v-for="maga in magasiniers" :key="maga.id">
       <td>{{maga.nom}}</td>
       <td>{{maga.prenom}}</td>
       <td>{{maga.telephone}}</td>
       <td> <button>delete</button> <button>update</button></td>
   </tr>
   

 </table>
</template>
<script>
import axios from "axios";
import AddMagas from "../components/AddMagas.vue";
export default{
        data(){
            return{
                modal_add_magasinier:false,
            magasiniers:[]
            }
        },
        methods:{
            recupererMagasinier(){
                axios.get('http://127.0.0.1:8000/alimentation/magasinier/')
                .then((response)=>{
                    this.magasiniers=response.data
                }).catch((error)=>{
                    console.log(error)
                })
            }

        },
        mounted(){
            this.recupererMagasinier()
        },
        components:{
            AddMagas,
        }
    
    }


</script>

<style scoped>
</style>