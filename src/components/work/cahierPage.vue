<template>
  <div class="container">
  <h1>Le Cahier Des Charges</h1>
  <h2>Vous avez donc décidez d'admirer mon magnifque Cahier Des Charges , très bon choix de votre part</h2>
  <img src="/cahier.jpg" alt="ceci est l'image de mon cahier">
  <p>Je vous laisse en savoir plus en cliquant ci-dessous</p>
  <button @click="isModalOpen = true" class="open-button">Voir plus</button>

  <div v-if="isModalOpen" class="modal" @click.self="isModalOpen = false">
    <div class="modal-content">
      <span @click="isModalOpen = false" class="close-button">&times;</span>
      <h2 class="title">Le Cahier Des Charges</h2>
      <p>Lors de ma deuxième création j'ai du réaliser un cahier des charges pour la conception d'un site web pour une boutique fictive se nommant la "socketterie" je devais répondre a tous les besoins du clients , des normes du w3c et autres pour que le site soit conforme, cette réalisation a été faites le 28/01/2024  </p>
      <p> pouvez voir l'intégralité du cahier des charges en cliquant <a href="https://docs.google.com/document/d/1iXZyrD1eMwAgQuNLbaSw49AGjUKc2-wNb8w6HNm99QA/edit#heading=h.ohhgldwswm60" alt="lien lien renvoyant vers le cahier des charges" target="blank"><strong>ici</strong></a></p>
      <br>
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
