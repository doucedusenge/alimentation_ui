<template>
<button @click="Add_commande=!Add_commande"> AddCommande</button>
<AddCommande v-if="Add_commande"></AddCommande>
</template>
<script>
import AddCommande from "../components/AddCommande";

export default{
    data(){
        return{
                Add_commande:false,
        }
    },
    components:{
    AddCommande,
    
}
}
</script>

<style>

</style>