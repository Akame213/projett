<template>
  <nav class="navbar">
    <!-- Logo et nom -->
    <div class="logo-container">
      <img src="/logo.png" alt="Mon logo de portfolio" class="logo">
      <span class="name">Marouane Frahi</span>
    </div>

    <!-- Liens de navigation -->
    <ul class="nav-links">
      <li><router-link to="/" class="nav-link">Accueil</router-link></li>
      <li><router-link to="/contact" class="nav-link">Projets</router-link></li>
      <li><router-link to="/about" class="nav-link">À propos</router-link></li>
    </ul>

    <!-- Liens des réseaux sociaux -->
    <ul class="nav-reseaux">
      <li>
        <a href="https://www.linkedin.com/in/marouane-frahi-619981304/" target="_blank" class="social-link">
          <img src="logo-linkedin.png" alt="renvoie vers mon profil LinkedIn" class="linkedin-logo">
        </a>
      </li>
      <li>
      <a href="https://github.com/Akame213" target="_blank" class="social-link">
          <img src="git-hub.png" alt="renvoie vers mon profil git hub" class="git-logo">
      </a>
        </li>
        <li>
      <a href="https://www.instagram.com/marouanefrahi/" target="_blank" class="social-link">
          <img src="instagram.png" alt="renvoie vers mon profil instagram" class="instagram-logo">
      </a>
        </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavbarPage"
};
</script>

<style scoped>
/* Styles spécifiques à la barre de navigation */
.navbar {
  background-color: #ffffff;
  padding: 20px;
  display: flex;
  align-items: center;
}

.logo-container {
  display: flex;
  align-items: center;
  margin-right: 300px;
  
}

.logo {
  width: 70px;
  height: auto;
  margin-right: 10px;
}

.name {
  font-size: 20px;
  font-weight: bold;
}

.nav-links {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center; /* Centrer horizontalement les éléments */
}

.nav-links li {
  margin: 0 10px; /* Ajout d'un espacement horizontal uniforme entre les éléments */
}

a.nav-link {
  color: white;
  text-decoration: none;
  font-size: 20px;
  padding: 10px 20px;
  background-color: rgb(25, 159, 159);
  border-radius: 10px;
  transition: box-shadow 0.3s ease;
}

a.nav-link:hover {
  box-shadow: 0px 0px 10px rgb(25, 159, 159);;
}

.nav-reseaux {
  list-style-type: none;
  padding: 0;
  display: flex;
}

.nav-reseaux li {
  margin-left: 20px; /* Ajoutez un espace entre les logos et les autres liens */
}

.social-link {
  text-decoration: none; /* Supprimez le soulignement du lien */
}

.linkedin-logo {
  width: 48px; 
  height: auto;
  border-radius: 10px;
  margin-left: 250px;
  transition: box-shadow 0.3s ease; /* Ajoutez une transition pour l'ombre */
}

.linkedin-logo:hover {
  box-shadow: 0px 0px 10px rgb(25, 159, 159);; /* Ajoutez une ombre au survol */
}
.git-logo{
  width: 50px;
  border-radius: 10px;
  transition: box-shadow 0.3s ease;
}
.git-logo:hover {
  box-shadow: 0px 0px 10px rgb(25, 159, 159);; /* Ajoutez une ombre au survol */
}
.instagram-logo {
  width: 48px; 
  height: auto;
  border-radius: 10px;
  transition: box-shadow 0.3s ease; /* Ajoutez une transition pour l'ombre */
}
.instagram-logo:hover {
  box-shadow: 0px 0px 10px rgb(25, 159, 159);; /* Ajoutez une ombre au survol */
}
</style>
