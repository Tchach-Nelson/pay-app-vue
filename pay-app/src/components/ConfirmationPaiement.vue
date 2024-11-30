<template>
  <div class="confirmation-container">
    <h2>Merci pour votre paiement !</h2>
    <p>Votre paiement a été traité avec succès.</p>
  </div>
</template>

<script>
export default {
  name: 'ConfirmationPaiement'
};
</script>

<style scoped>
.confirmation-container {
  text-align: center;
  padding: 40px;
  background-color: #d4edda;
  color: #155724;
  border-radius: 8px;
  margin-top: 50px;
}
</style>
