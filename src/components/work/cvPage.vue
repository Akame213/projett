<template>
    <div class="container">
    <h1>Le CV</h1>
    <h2>Vous avez donc décidez d'admirer mon magnifque CV , très bon choix de votre part</h2>
    <img src="/cvv.jpg" alt="ceci est l'image de mon cv">
    <p>Je vous laisse en savoir plus en cliquant ci-dessous</p>
    <button @click="isModalOpen = true" class="open-button">Voir plus</button>
  
    <div v-if="isModalOpen" class="modal" @click.self="isModalOpen = false">
      <div class="modal-content">
        <span @click="isModalOpen = false" class="close-button">&times;</span>
        <h2 class="title">Le CV</h2>
        <p>Voici ma première réalisation crée le 19/01/2024 contenant moi CV, voici une partie de mon code en HTML qui est la structure de ma page. Cela est souvent représenté comme le "squelette" de notre corps. Une très grande partie du contenu d'une page web est inclus dedans.</p>
        <img src="/code.jpg" alt="La création de mon CV en HTML">
        <p>(je suis conscient que les parties du code sont un peu floues.)</p>
        <img src="/css.jpg" alt="La création de mon CV en CSS">
        <p>Ceci contient une partie de mon code cette fois ci en CSS. Le CSS est le rendu visuel de la page web, cela renvoie directement au style de la page web. Pour revenir à l'exemple précédent, cela est représenté comme la "peau" de notre corps.</p>
      </div>
    </div>
  </div>
    </template>
  
  <script>
  export default {
    name: "CvPage",
    data() {
      return {
        isModalOpen: false
      };
    }
  };
  </script>
  
  <style>
.container {
  text-align: center;
  color: white;
}

.open-button {
  width: 200px; 
  height: 50px; 
  font-size: 18px; 
  font-weight: bold; 
  color: rgb(0, 0, 0); 
  background-color: #ffffff; 
  border: none; 
  border-radius: 5px; 
  cursor: pointer; 
  outline: none; 
  transition: background-color 0.3s, transform 0.2s; 
}

.open-button:hover, .open-button:focus {
  background-color: #0056b3; 
  transform: scale(1.05); 
}

.modal {
  display: flex;
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  overflow-y: auto;
  align-items: flex-start;
  justify-content: center;
  padding-top: 50px;
  padding-bottom: 50px;
}

.modal-content {
  background-color: rgb(25, 159, 159);
  padding: 20px;
  width: 90%;
  max-width: 600px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  position: relative;
  margin: 20px;
  overflow-y: auto;
}

.close-button {
  color: #fff;
  position: absolute;
  top: 10px;
  right: 20px;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
}

.close-button:hover {
  color: #ccc;
}
</style>
