<template>
  <h1>Mes Projets</h1>
  <br>
  <h2>Bienvenue sur ma page présentant l'ensemble de mes projets réalisés lors de ces derniers mois.</h2>
  <div class="project-container">
    <div class="project-cv">
      <!-- Lien vers la page détaillée du CV -->
      <a href="http://localhost:8080/work/cv">
        <img src="/cvv.jpg" alt="image de mon cv">
      </a>
    </div>
    <div class="project-cahier">
      <!-- Lien vers la page détaillée du cahier des charges -->
     <a href="http://localhost:8080/work/cahier">
        <img src="/cahier.jpg" alt="image de mon cahier des charges">
      </a>
    </div>
    <div class="project-comment">
      <!-- Lien vers la page détaillée de l'espace commentaire -->
      <a href="http://localhost:8080/work/comment">
        <img src="/espace-commentaire.jpg" alt="l'image représente mon espace commentaire">
      </a>
    </div>
  </div>
</template>



  
  <script scoped>
  export default {
    name: "WorkPage"
  };
  </script>

<style>
h1,h2{
  color: white;
  text-align: center;
}
.project-container img{
    padding: 20px;                 
    margin: 10px;                   
    border-radius: 20px;
    background-color: white;           
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);  
    text-align: center;           

}
.project-cv .project-cahier{
  display: flex;
  
}
 .project-cv img{
  max-width: 450px;
  margin-left: 200px;
  margin-top: 100px;
  max-height: 450px;
 }
 .project-cahier img{
  max-width: 450px;
  max-height: 450px;
  margin-left: 750px;
  margin-top: -700px;
 }
 .project-comment img{
  max-width: 600px; 
  margin-left: 425px;
 }
</style>
