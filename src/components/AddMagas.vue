<template> <div class="contenair">
        
        <div class="div12 ">
          <div class="h2">Magasinier </div>  
          <div> <label class="label">  nom:</label>
         <input type="text" name="" v-model="nom" class="input input1" placeholder="first name*"></div>
       <div> <label class="label">  prenom:</label>
       <input type="text" name="" v-model="prenom" class="input input2" placeholder="last name*"></div>
     
     <div><label class="label">  email:</label>
        <input type="email" name="" class="input input3" placeholder="Email*"><br></div>
    <div><label class="label">  tel:</label>
        <input type="tel" name="" v-model="tel" class="input input4" placeholder="tel"></div>

        <button type="submit" class="input " @click="add_magasinier()">Enregistrer</button>
        
        <button  class="button">annuler</button>
      
        </div>
     
    </div>
</template>

<script>
import axios from 'axios'

export default{
    data(){
        return{
            nom:"",
            prenom:"",
            tel:0

        }
    },
    methods:{
        add_magasinier(){
            let data=new FormData()
            data.append("nom",this.nom)
            data.append("prenom",this.prenom)
            data.append("telephone",this.tel)
            axios.post('http://127.0.0.1:8000/alimentation/magasinier/',data)
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
.contenair{
    background-color: black;
}
.label{
    color: white;
    font-size: 25px;

}
.div12{
    background-color: black;
}
.inpuut{
    width: 170px;
    height: 60px;
    color: orangered;
}
.input{
    height: 45px;
    width: 500px;
    font-size: 25px;
    font-style: oblique;
    background-color: white;
    margin-top: 40px;
}
.input1{
    background-color: burlywood;
    color: white;
    
    
}
.button{
    color: white;
    width: 170px;
    height: 60px;
    background-color: burlywood;

}
.h2{
    font-size: 32px;
    font-weight: bolder;
    font-style: inherit;
}
</style>