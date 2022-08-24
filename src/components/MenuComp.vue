<template>
 <div class="menu">
    <div class="header-menu">
        <h3>Douce</h3>
         <button class="btn btn-primary" @click="HomeDeconnexion">Deconnexion</button>
    </div>
    <div class="side-menu">
        <li @click="$router.push('/produit')"><a href="#">Produit</a></li>
        <li @click="$router.push('/magasinier')"><a href="#">Magasinier</a></li>
        <li @click="$router.push('/vente')" ><a href="#">Vente</a></li>
        <li @click="$router.push('/commande')"><a href="#">commande</a></li>
        <li @click="$router.push('/client')"><a href="#">Client</a></li>
    </div>
    <div class="main">
        <router-view></router-view>
    </div>
    
</div>
</template>

<script>
    export default{
        methods:{
            HomeDeconnexion(){
                this.$emit("DecoHome")
            }
        }
    }
</script>
<style>
*{
    margin: 0;
    padding: 0;
}
.header-menu{
    display: flex;
    justify-content: space-between;
    background-color: orangered;
    height: 3em;
}
.side-menu{
    background-color: black;
    width: 15em;
    height: 100%;
    position: fixed;
}

li{
    padding: 30px 10px 30px 10px;
    list-style-type: none;
}
li>a{
    text-decoration: none;
    color: white;
}
li:hover{
    background-color: orangered;
    transition: 0,2s;
}
.main{
    position: absolute;
    top:3.5em;
    left: 15.5em;
}
.btn{
    width: auto;
    height: auto;
    padding: 2px;
}
.btn-primary{
    background-color: whi;
}
</style>
