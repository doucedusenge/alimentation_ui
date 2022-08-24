<template>
<div class="content">
    <h1 class="h1">Login</h1>
    <div class="">
     Username: <input type="text" class="input">
    password: 
    <input type="password" class="input pswd">
    <button @click="handlerConnection" class="button">Connexion</button>
    </div>
</div>
</template>
<script>
    export default{
        methods:{
            handlerConnection(){
                this.$emit("connectEmited",{"is_connected":true})
            }
        }
    }
</script>

<style scoped>
.button{
    background-color: white;
    width: 130px;
    height: 40px;
    border-radius: 20px 20px;
    margin-top: 20px;
    margin-right: 40px;
    border-color:rgb(255, 255, 255);
    border-style: dotted;
}
.h1{
    margin-left: 220px;
    color: white;
}

.content{
    background-color: lightblue;
    margin-left: 420px;
    border-radius: 40px 40px;

}
.input{
    border: none;
    border-bottom: 4px solid black;
}


</style>