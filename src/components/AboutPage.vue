<template>
    <div class="container">
      <h1>À propos</h1>
      <h2>Découvrez mon parcours et mes compétences</h2>
      <img src="image-portfolio.jpg" alt="l'image représente mon parcours">
      <h3>Parcours</h3>
      <p>
        A la suite de l'obtention de mon BAC STI2D , j'ai fais le choix de continuer mes études et de m'orienter vers le developpement web. Je suis actuellement en formation au CEF pour devenir Developpeur web Full-Stack et je sais que de grandes choses m'attendent !
      </p>
            <br>
            <p>Concernant mon parcours extra-scolaire , je pratique le K1/Muay thai ce qui me donne une certaine force mentale et une discipline qui me permet de braver toutes épreuves</p>
            <br>
            <p>Pour en conclure, je dirai que mon parcours scolaire et extra-scolaire ont une bonne complémentarité, et que tous les deux ont énormément de points communs, comme le fait de ne jamais abandonner, de toujours ce dépasser, d'acquérir chaque jours une plus grande expérience et encore pleins d'autres !</p>
       <h3>Diplômes</h3> 
       <ul>
        <li>2020 - Diplome national du brevet</li>
        <br>
        <li>2023 - BAC STI2D</li>
        <br>
      <li>2024-2025 - Formation developpeur web et web mobile en cours...</li>  
         </ul>
      <h3>compétences</h3>
      <p>Curieux, Créatif, Dynamique, Persévérant, Esprit d'équipe</p>
    </div>
  </template>
  
  <script>
  export default {
    name: "AboutPage"
  };
  </script>
  
  <style scoped>
  
      .container{
        text-align: center;
        max-width: 1200px;
        margin-left: 120px;
      }
      h1,h2,h3,p,ul,li,img{
        text-align: center;
        margin: 0 auto; /* Centre le conteneur sur la page */
  padding: 20px; 
}
      h1{
        font-size: 4rem;
        color: white;
      }
      h2,h3{
        font-size: 2rem;
        color: white;
        
      }
     
      p,li{
        font-size: 1.25rem;
        color: white;

      }
      img{
        width: 550px;
        display: block;
        margin: 0 auto;     
       }
      ul,li{
       list-style-type: none;
      }
  </style>
  