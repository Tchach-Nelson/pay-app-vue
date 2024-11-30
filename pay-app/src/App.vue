<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logoNotchPay.png" class="logo">
    <FormPay />
  </div>
</template>

<script>
import FormPay from './components/FormPay.vue'; // Importez le composant FormPay

export default {
  name: 'App',
  components: {
    FormPay, // Déclarez le composant FormPay dans la section components
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  background-color: rgba(0, 0, 0, 0.8);
  padding: 50px;
}

.logo{
  width: 100px;
  border-radius: 100%;
  margin-bottom: -10px;
  border: 2px solid white;
}
</style>
