<template>
  <nav class="navbar">
    <div class="logo-container">
      <img src="/logo.png" alt="Mon logo de portfolio" class="logo">
      <span class="name">Marouane Frahi</span>
    </div>
    <ul class="nav-links">
      <li><a href="http://localhost:8080" class="nav-link">Acceuil</a></li>
     
      <li>
        <a href="http://localhost:8080/work" class="nav-link">Mes Projets</a>
      </li>
      <li><a href="http://localhost:8080/about" class="nav-link">A propos</a></li>
    </ul>
    <ul class="nav-reseaux">
      <li>
        <a href="https://www.linkedin.com/in/marouane-frahi-619981304/" target="_blank" class="social-link">
          <img src="/logo-linkedin.png" alt="LinkedIn" class="linkedin-logo">
        </a>
      </li>
      <li>
        <a href="https://github.com/Akame213" target="_blank" class="social-link">
          <img src="/git-hub.png" alt="GitHub" class="git-logo">
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/marouanefrahi/" target="_blank" class="social-link">
          <img src="/instagram.png" alt="Instagram" class="instagram-logo">
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import { defineComponent } from 'vue';


export default defineComponent({
  name: "NavbarPage",
  components: {
   
  }
});
</script>

<style>
.navbar {
  background-color: #ffffff;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo-container {
  display: flex;
  align-items: center;
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
}

.nav-links li {
  margin: 0 10px;
}

.nav-link {
  color: #ffffff;
  text-decoration: none;
  font-size: 20px;
  padding: 10px 20px;
  background-color: rgb(25, 159, 159);
  border-radius: 10px;
  transition: box-shadow 0.3s ease;
}

.nav-link:hover {
  box-shadow: 0px 0px 10px rgb(25, 159, 159);
  cursor: pointer;
}

.nav-reseaux {
  list-style-type: none;
  padding: 0;
  display: flex;
}

.nav-reseaux li {
  margin-left: 20px;
}

.social-link {
  text-decoration: none;
}

.linkedin-logo,
.git-logo,
.instagram-logo {
  width: 48px;
  height: auto;
  border-radius: 10px;
  transition: box-shadow 0.3s ease;
}

.linkedin-logo:hover,
.git-logo:hover,
.instagram-logo:hover {
  box-shadow: 0px 0px 10px rgb(25, 159, 159);
}
</style>
