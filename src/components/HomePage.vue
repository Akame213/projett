<template>
  <div class="container">
    <div class="content">
      <h1>Hello, je m'appelle <br>Marouane Frahi</h1>
      <h2>Je suis un développeur Full-Stack habitant en <br>France, près de Rouen</h2>
      <div class="dev">Développeur</div>
    </div>

    <ul class="skills">
      <li>
        <h3>Fullstack</h3>
        <p>Construisons ensemble des expériences web exceptionnelles, d'une conception à la réalisation.</p>
      </li>
      <li>
        <h3>Team player</h3>
        <p>Dans l'union des esprits, le travail de groupe transcende les limites individuelles, donnant naissance à des accomplissements remarquables et durables.</p>
      </li>
      <li>
        <h3>Persévérant</h3>
        <p>La persévérance est comme l'eau qui sculpte la pierre : avec le temps, rien ne lui résiste.</p>
      </li>
    </ul>

    <div class="projects">
      <h2 class="title">Mes Projets :</h2>
      <div class="project-grid">
        <div class="project-item">
          <h3>CV</h3>
          <a href="http://localhost:8080/work/cv"><img src="cvv.jpg" alt="Image de mon CV"></a>
        </div>
        <div class="project-item">
          <h3>Cahier des charges</h3>
          <a href="http://localhost:8080/work/cahier"><img src="cahier.jpg" alt="Image de mon cahier des charges"></a>
        </div>
        <div class="project-item">
          <h3>Espace commentaire</h3>
          <a href="http://localhost:8080/work/comment"><img src="espace-commentaire.jpg" alt="Image de mon espace commentaire"></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  color: white;
}

.content {
  margin-left: 200px;
  margin-top: 50px;
}

h1 {
  font-size: 4rem;
  color: white;
  margin-left: -700px;
}

h2 {
  font-size: 2rem;
  color: white;
  margin-left: -600px;
}

.dev {
  color: rgb(13, 141, 141);
  text-decoration: none;
  font-size: 20px;
  padding: 10px 20px;
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  max-width: 120px;
}

.skills {
  display: flex;
  align-items: center;
  padding: 25px;
  margin-left: 200px;
  margin-top: 60px;
  border: 2px solid rgb(255, 255, 255);
  border-radius: 15px;
  max-width: 1100px;
  list-style-type: none;
}

h3 {
  margin-left: 50px;
  font-size: 2rem;
  color: rgb(255, 255, 255);
}

.skills li, .skills p {
  font-size: 1.25rem;
  color: rgb(255, 255, 255);
}

.projects {
  padding: 5px;
  margin: 100px;
  border: 2px solid white;
  border-radius: 15px;
}

.title {
  margin-left: 150px;
  margin-top: 150px;
  font-size: 2.5rem;
}

.project-grid {
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
}

.project-item {
  text-align: center;
}

.project-title {
  font-size: 1.5rem;
  margin-top: 10px;
  margin-left: -50px;
}

.project-item img {
  width: 350px;
  border-radius: 15px;
  margin: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-item img:hover {
  transform: scale(1.05);
  box-shadow: 0 0 10px rgb(255, 255, 255);
}
</style>