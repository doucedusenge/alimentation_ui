<template>
  <div>
    <LoginComp v-if="!is_connected" @connectEmited="is_connected=true"></LoginComp>
    <div v-else>
      <MenuComp @DecoHome="is_connected=false">
        <slot ></slot>
      </MenuComp>
    </div>    
  </div>
</template>

<script>
import LoginComp from './components/LoginComp.vue'
import MenuComp from './components/MenuComp.vue'
export default {
  data(){
    return {
      is_connected:false,
    }
  },
  components: {
    LoginComp,
    MenuComp
}
}
</script>

<style>
#app {

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
