<template>
    <footer class="footer">
      <div class="contact-form">
        <h3>Contactez-nous</h3>
        <form @submit.prevent="sendEmail">
          <input type="text" v-model="contactForm.name" placeholder="Votre nom" required>
          <input type="email" v-model="contactForm.email" placeholder="Votre email" required>
          <textarea v-model="contactForm.message" placeholder="Votre message" required></textarea>
          <button type="submit">Envoyer</button>
        </form>
      </div>
    </footer>
  </template>
  
  <script>
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
      // Logique d'envoi d'email - implémenter avec une API ou un service backend
      console.log(this.contactForm); // Test pour voir les données en console
      // Vous pouvez remplacer ceci par une requête AJAX ou une intégration avec un service d'email
      // Exemple hypothétique:
      // try {
      //   const response = await axios.post('url-de-votre-api', this.contactForm);
      //   console.log('Email envoyé avec succès:', response.data);
      // } catch (error) {
      //   console.error('Erreur lors de l'envoi de l'email:', error);
      // }
    }
  }
};
</script>

  
  <style scoped>
  .footer input, .footer textarea {
    width: 100%; /* Ajustez la largeur selon vos besoins */
    padding: 8px;
    margin: 10px 0;
  }
  </style>
  