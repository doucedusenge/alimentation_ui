import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView"
import MagasinierView from "../views/MagasinierView"
import ProductView from "../views/ProductView"
import ClientView from"../views/ClientView"
import VenteView from "../views/VenteView"
import CommandeView from"../views/CommandeView"

const routes =[
    {path :'/',name:"Home",component:HomeView},
    {path:'/magasinier',name:"magasinier",component:MagasinierView},
    {path:"/produit",name :"produit",component:ProductView},
    {path:"/produit/:id",name :"modifierProduit",component:ProductView},
    {path:"/client",name:"client",component:ClientView},
    {path:"/vente",name:"vente",component:VenteView},
    {path:"/commande",name:"commande",component:CommandeView}

]

const router=createRouter({
    history:createWebHistory(),
    base:process.env.BASE_URL,
    routes
})
export default router