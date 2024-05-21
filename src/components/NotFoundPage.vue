<template>
    <div class="not-found">
      <h1>404 - Page non trouvée</h1>
      <p>La page que vous cherchez n'existe pas.</p>
      <a href="http://localhost:8080/" class="home-link">Retour à l'accueil</a>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NotFoundPage'
  };
  </script>
  
  <style>
  .not-found {
    text-align: center;
    margin-top: 50px;
    color: rgb(255, 255, 255);
  }
  h1{
    font-size: 4rem;
  }
  p{
    font-size: 2rem;
  }
  .home-link {
    text-decoration: none; /* Retire le soulignement */
    color: rgb(255, 255, 255); /* Change la couleur du texte */
    background-color: rgb(25, 159, 159); /* Ajoute une couleur de fond */
    padding: 10px 20px; /* Ajoute du padding pour rendre le lien plus grand */
    border-radius: 5px; /* Ajoute des coins arrondis */
    display: inline-block; /* Permet au lien de se comporter comme un élément de bloc */
    transition: background-color 0.3s ease; /* Ajoute une transition pour le changement de couleur */
  }
  
  .home-link:hover {
    background-color: rgb(0, 128, 128); /* Change la couleur de fond au survol */
  }
  </style>
  