<template>
  <div class="container">
  <div class="menu-container">
    <h1>Hello, je m'appelle <br>Marouane Frahi</h1>
    <h2>Je suis un développeur Full-Stack habitant en <br>France, près de Rouen</h2>
    <div class="dev">Développeur</div>
  </div> 

  <ul class="skills">
    <li>
      <h3>Fullstack</h3>
      <ul>
        <li>Construisons ensemble des expériences web exceptionnelles, de la conception à la réalisation.</li>
      </ul>
    </li>
    <li>
      <h3>Team player</h3>
      <ul>
        <li>Dans l'union des esprits, le travail de groupe transcende les limites individuelles, donnant naissance à des accomplissements remarquables et durables.</li>
      </ul>
    </li>
    <li>
      <h3>Persévérant</h3>
      <ul>
        <li>La persévérance est comme l'eau qui sculpte la pierre : avec le temps, rien ne lui résiste.</li>
      </ul>
    </li>
  </ul>

  <h2 class="title"> Mes Projets :</h2>
  
  <div class="projet">
    <div class="projet-item">
      <h3 class="projet-title">CV</h3>
      <img src="cvv.jpg" alt="l'image de mon CV" class="cv">
    </div>
    <div class="projet-item">
      <h3 class="projet-title">Cahier des charges</h3>
      <img src="cahier.jpg" alt="l'image de mon cahier des charges" class="cdg">
    </div>
    <div class="projet-item">
      <h3 class="projet-title">Espace commentaire</h3>
      <img src="espace-commentaire.jpg" alt="l'image de mon espace commentaire" class="commentaire">
    </div>
  </div>
</div>
</template>

<script>
export default {
  // Votre script ici
}
</script>

<style scoped>
.container{
  color: white;
}
.menu-container {
  margin-left: 200px;
  margin-top: 50px;
  
}

h1 {
  font-size: 4rem;
  

}

h2 {
  font-size: 2rem;
}

.dev {
  color: white;
  text-decoration: none;
  font-size: 20px;
  padding: 10px 20px;
  background-color: rgb(16, 121, 121);
  border-radius: 10px;
  max-width: 120px;
}

.skills {
  display: flex;
  align-items: center;
  padding: 25px;
  margin-left: 200px;
  margin-top: 60px;
  border: 2px solid rgb(25, 159, 159);
  border-radius: 15px;
  max-width: 1100px;
  color: rgb(0, 0, 0);
}

h3 {
  margin-left: 50px;
  font-size: 2rem;
}

li {
  font-size: 1.25rem;
}

.skills, li {
  list-style-type: none;
  color: white;
}
.title{
  margin-left: 150px;
  margin-top: 150px;
  font-size: 2.5rem;
}
.projet {
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
}

.projet-item {
  text-align: center;
}

.projet-title {
  font-size: 1.5rem;
  margin-top: 10px;
  margin-left:-50px ;
}

.projet img {
  width: 350px;
  border-radius: 15px;
  margin: 10px; /* Espacement entre les images */
  transition: transform 0.3s, box-shadow 0.3s;
}

.projet img:hover {
  transform: scale(1.05); /* Zoom au survol */
  box-shadow: 0px 0px 10px rgb(255, 255, 255);; /* Ajout d'une ombre au survol */
}
</style>
