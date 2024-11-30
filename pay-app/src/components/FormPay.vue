<template>
  <div class="payment-form-container">
    <h2 class="form-title">FORMULAIRE DE PAIEMENT</h2>
    <form @submit.prevent="submitForm" class="payment-form">
      <!-- Pour notre champ nom -->
      <div class="form-group">
        <label for="name">Nom</label>
        <input
          type="text"
          id="name"
          v-model="form.name"
          :class="{'invalid': nameError}"
          placeholder="Entrez votre nom"
        />
        <span v-if="nameError" class="error-message">{{ nameError }}</span>
      </div>

      <!-- Champ email -->
      <div class="form-group">
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          v-model="form.email"
          :class="{'invalid': emailError}"
          placeholder="Entrez votre email"
        />
        <span v-if="emailError" class="error-message">{{ emailError }}</span>
      </div>

      <!-- Champ téléphone -->
      <div class="form-group">
        <label for="phone">Téléphone</label>
        <input
          type="tel"
          id="phone"
          v-model="form.phone"
          :class="{'invalid': phoneError}"
          placeholder="Entrez votre téléphone"
        />
        <span v-if="phoneError" class="error-message">{{ phoneError }}</span>
      </div>

      <!-- Champ montant -->
      <div class="form-group">
        <label for="amount">Montant</label>
        <input
          type="number"
          id="amount"
          v-model="form.amount"
          :class="{'invalid': amountError}"
          placeholder="Entrez le montant"
          min="1"
        />
        <span v-if="amountError" class="error-message">{{ amountError }}</span>
      </div>

      <br/>
      <br/>
      <!-- Méthode de paiement -->
      <div class="form-group">
        <label>Méthode de Paiement</label>
        <div class="payment-methods">
          <label for="mobileMoney">
            <input
              type="radio"
              id="mobileMoney"
              value="Mobile Money"
              v-model="form.paymentMethod"
            />
            <img alt="Vue logo" src="../assets/visa.png" width="150" height="50">
          </label>
          <label for="creditCard">
            <input
              type="radio"
              id="creditCard"
              value="Carte Bancaire"
              v-model="form.paymentMethod"
              />
            <img alt="Vue logo" src="../assets/momo.png" width="150" height="50">
          </label>
        </div>
      </div>

      <!-- Bouton de soumission -->
      <button type="submit" class="submit-button" :disabled="!isFormValid || loading">Payer</button>
    </form>

    <!-- Barre de chargement -->
    <div v-if="loading" class="loading-container">
      <p>Traitement du paiement...</p>
      <div class="progress-bar-background">
        <div :style="{ width: progress + '%' }" class="progress-bar"></div>
      </div>
    </div>

    <!-- Message de confirmation -->
    <div v-if="submitted && !loading" class="confirmation-message">
      <p>Merci pour votre paiement !</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Formpay'
};
</script>
<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        amount: '',
        paymentMethod: 'Mobile Money',
      },
      submitted: false,
      loading: false,
      progress: 0,
    };
  },
  computed: {
    nameError() {
      return this.form.name.trim() === '' ? 'Le nom est requis' : null;
    },
    emailError() {
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      return !emailPattern.test(this.form.email) ? 'Veuillez entrer un email valide' : null;
    },
    phoneError() {
      const phonePattern = /^[0-9]{9}$/;
      return !phonePattern.test(this.form.phone) ? 'Le téléphone doit comporter 9 chiffres' : null;
    },
    amountError() {
      return this.form.amount <= 0 ? 'Le montant doit être supérieur à 0' : null;
    },
    isFormValid() {
      return !this.nameError && !this.emailError && !this.phoneError && !this.amountError;
    }
  },
  methods: {
    submitForm() {
      console.log('Formulaire soumis:', this.form);
      this.submitted = false;
      this.loading = true;
      this.progress = 0;

      // const transaction = {
      //   amount: 0,
      //   currency: 'XAF', 
      //   paymentMethod: 'mobile_money',
      //   customer: {
      //     name : '',
      //     email: '',
      //     phone: '',
      //   },
      //   status: ''
      // };

      // Simuler un processus de paiement avec une barre de chargement
      const interval = setInterval(() => {
        if (this.progress < 100) {
          this.progress += 10; // Augmenter la progression
        } else {
          clearInterval(interval);
          this.loading = false;
          this.submitted = true;
        }
      }, 500); // Mise à jour toutes les 500 ms
    },
  },
};
</script>

<style scoped>
/* Styles de base pour le formulaire */
.payment-form-container {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 50px;
  background-color: #1b7b60;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 100;
  color: white;
  border: 2px solid white
}

.form-title {
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 20px;
}

.payment-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 15px;
  margin-right: 20px
}

.form-group label {
  font-weight: bold;
  display: block;
  margin-bottom: 5px;
}

.form-group input {
  width: 100%;
  height: 20px;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 10px;
}

.form-group input.invalid {
  border: 2px solid #e74d3caa;
}

.error-message {
  color: #e74c3c;
  /* font-size: 0.875rem; */
  margin-top: 5px;
  font-size: 12px

}

.payment-methods {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  /* flex-direction: column; */
}

.payment-methods label {
  font-weight: normal;
  margin-bottom: 5px;
}

.submit-button {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 12px;
  font-size: 1.1rem;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.submit-button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}

.submit-button:hover {
  background-color: #45a049;
}

.confirmation-message {
  margin-top: 20px;
  padding: 10px;
  background-color: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
  border-radius: 4px;
  text-align: center;
}

/* Styles de la barre de chargement */
.loading-container {
  margin-top: 20px;
  text-align: center;
}

.progress-bar-background {
  width: 100%;
  background-color: #f3f3f3;
  height: 20px;
  border-radius: 10px;
  margin-top: 10px;
}

.progress-bar {
  height: 100%;
  background-color: #4CAF50;
  border-radius: 10px;
  width: 0%;
  transition: width 0.5s ease;
}
</style>
