<template>
  <footer class="footer">
    <div class="contact-form">
      <h3>Contactez-nous</h3>
      <form @submit.prevent="sendEmail" class="contact-form-container">
        <div class="input-row">
          <input type="text" v-model="contactForm.name" placeholder="Votre nom" required>
          <input type="email" v-model="contactForm.email" placeholder="Votre email" required>
        </div>
        <textarea v-model="contactForm.message" placeholder="Votre message" required></textarea>
        <button type="submit">Envoyer</button>
      </form>
    </div>
    <hr>
    <div class="footer-info">
      <div class="creator-info">Created and Developed by Marouane Frahi</div>
      <div class="date-time"><small><time datetime="2024-05-20">Dernière mise à jour le 20 mai 2024</time></small></div>
      <div class="social-links">

        <div class="link">
        <a href="https://www.linkedin.com/in/marouane-frahi-619981304/" target="blank"><img src="/logo-linkedin.png" alt="logo linkedin"></a>
        <a href="https://github.com/Akame213" target="blank"> <img src="/git-hub.png" alt="logo git hub"></a>
        <a href="https://www.instagram.com/marouanefrahi/" target="blank"> <img src="/instagram.png" alt="logo de instagram"></a>
      </div>
     
      </div>
    </div>
  </footer>
</template>


<script>
import axios from 'axios'; 

export default {
  name: 'FooterPage',
  data() {
    return {
      contactForm: {
        name: '',
        email: '',
        message: ''
      }
    };
  },
  methods: {
    async sendEmail() {
      try {
        const response = await axios.post("http://localhost:3000/send", this.contactForm);
        console.log('Email envoyé avec succès:', response.data);
        alert("Message envoyé avec succès!");
        this.contactForm = { name: '', email: '', message: '' };
      } catch (error) {
        console.error("Erreur lors de l'envoi de l'email:", error);
        alert("Erreur lors de l'envoi de l'email.");
      }
    }
  }
};
</script>

<style>
.footer {
  padding: 20px;
  background-color: #f8f9fa;
  text-align: center;
}

.contact-form {
  width: 60%; 
  margin: auto; 
}

.input-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.input-row input,
.footer textarea {
  background-color: rgb(25, 159, 159); 
  color: white; 
  width: 49%; 
  padding: 8px;
  margin-top: 10px;
  border: 1px solid #ccc; 
  border-radius: 4px; 
}

.input-row input::placeholder,
.footer textarea::placeholder {
  color: #ffffff; 
  opacity: 0.8; 
}

.footer textarea {
  width: 100%;
  height: 100px;
  margin-bottom: 10px;
}

.footer button {
  display: block; 
  margin-top: 10px;
  margin-left: auto; 
  background-color: rgb(25, 159, 159);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.footer button:hover {
  background-color: #0056b3;
}

.footer-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
}

.creator-info, .date-time, .social-links img {
  margin: 5px; 
}

.social-links img {
  width: 32px; 
  height: 32px; 
}
img{
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
}

.link img:hover {
  transform: scale(1.05);
  box-shadow: 0px 0px 10px rgb(25, 159, 159);
}

</style>

