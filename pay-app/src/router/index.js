import Vue from 'vue';
import Router from 'vue-router';
import FormPay from '@/components/FormPay.vue';
import ConfirmationPaiement from '@/components/ConfirmationPaiement.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'payment',
      component: Formpay
    },
    {
      path: '/confirmation',
      name: 'confirmation',
      component: ConfirmationPaiement
    }
  ]
});
