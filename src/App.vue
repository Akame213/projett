<template>
  <div id="app">
    <NavbarPage />
    <router-view></router-view>

  
    <hr class="section-separator" />

    <FooterPage />
  </div>
</template>


<script>
import { defineComponent } from 'vue';
import NavbarPage from './components/NavbarPage.vue';
import FooterPage from './components/FooterPage.vue'; 

export default defineComponent({
  name: 'App',
  components: {
    NavbarPage,
    FooterPage 
  }
});
</script>

<style>
#app {
  background-color: rgb(25, 159, 159);
}
.section-separator {
  border: none; 
  height: 2px; 
  background-color: #ffffff; 
  width: 100%; 
  margin: 50px auto; 
}
</style>
