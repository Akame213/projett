<template>
    <div class="container">
    <h1>L'Espace-Commentaire</h1>
    <h2>Vous avez donc décidez d'admirer mon magnifque Espace Commentaire Dynamique , très bon choix de votre part</h2>
    <img src="/espace-commentaire.jpg" alt="ceci est l'image de mon espace commentaire">
    <p>Je vous laisse en savoir plus en cliquant ci-dessous</p>
    <button @click="isModalOpen = true" class="open-button">Voir plus</button>
  
    <div v-if="isModalOpen" class="modal" @click.self="isModalOpen = false">
      <div class="modal-content">
        <span @click="isModalOpen = false" class="close-button">&times;</span>
        <h2 class="title">L'Espace-Commentaire</h2>
        <p>Lors de ma dernière création le 09/03/2024, j'ai du dynamiser un espace commentaire à  partir d'un fichier HTML et Javascript que vous pouvez retrouver  <a href="https://github.com/Akame213/commentaire"><strong>ici</strong></a>et comme vous pouvez le constater a l'envoie de ce commentaire celui-ci s'affiche en haut.</p>
      <br>
      <img src="/comment.jpg" alt="La dynamisation de mon cahier des charges.">
        <br>
        <p>Bien evidemment si un des trois champs est invalide ou inexistant celui-ci nous le fait savoir :</p>
    <img src="/commentt.jpg" alt="La dynamisation de mon cahier des charges.">


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
  
  <style scoped>
.modal-content {
  background-color: rgb(25, 159, 159);
  padding: 20px;
  width: 90%; /* Vous pouvez augmenter cette largeur si nécessaire */
  max-width: 800px; /* Ajustez cette largeur maximale pour donner plus d'espace */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  position: relative;
  margin: 20px auto; /* Centrage horizontal du contenu */
  overflow-y: auto;
}

.modal-content img {
  max-width: 100%; /* Assure que les images ne dépassent pas la largeur du contenu du modal */
  height: auto; /* Maintient le ratio de l'image */
  margin-bottom: 20px; /* Espacement entre les images et le texte */
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
