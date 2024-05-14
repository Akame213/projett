<template>
  <div id="App">
    <router-view></router-view>
  </div>
</template>

<script>

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  
});
</script>

<style>
/* Ajoutez vos styles CSS ici */
#app {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}
</style>
