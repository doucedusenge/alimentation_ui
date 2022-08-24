<template>
<button  @click=" modal_add_client=!modal_add_client">Add Client</button>
<AddClient v-if="modal_add_client"></AddClient>
</template>
<script>
import AddClient from "../components/AddClient";

    
    export default{
        data(){
            return{
                modal_add_client:false,
                
            }
            
        },
        components:{
            AddClient
        }
    }
</script>

<style>


</style>