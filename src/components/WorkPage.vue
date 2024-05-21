<template>
  <div class="work-page">
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
  </div>
</template>

<script>
export default {
  name: "WorkPage"
};
</script>

<style scoped>
.work-page h1 {
  font-size: 4rem;
}

.work-page h2 {
  font-size: 2.5rem;
}

.work-page h1,
.work-page h2 {
  color: white;
  text-align: center;
}

.project-container img {
  padding: 20px;
  margin: 10px;
  border-radius: 20px;
  background-color: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-container img:hover {
  transform: scale(1.1);
  box-shadow: 0 0 10px rgb(255, 255, 255);
}

.project-cv,
.project-cahier {
  display: flex;
}

.project-cv img {
  max-width: 450px;
  margin-left: 200px;
  margin-top: 100px;
  max-height: 450px;
}

.project-cahier img {
  max-width: 450px;
  max-height: 450px;
  margin-left: 750px;
  margin-top: -700px;
}

.project-comment img {
  max-width: 600px;
  margin-left: 425px;
}
</style>
