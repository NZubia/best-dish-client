<template>
  <div>
    <h1>Menú</h1>

    <ul>
      <li v-for="dish in dishes" v-on:click="detail(dish)">
        <h2>{{dish.name}} - ${{dish.price}}</h2>
        <img :src="dish.imgDir" width="200">
      </li>
    </ul>

    <h2>Orden</h2>

    <ul>
      <li v-for="dish in order">
        <p>{{dish.name}} - ${{dish.price}}</p>
      </li>
    </ul>

    <p>Total: {{totalAmount}}</p>
  </div>
</template>

<script>

import {mapGetters} from 'vuex';
import axios from 'axios';

export default {
  name: "home",
  components: {},
  data() {
    return {
      order: [],
      dishes: [
        {
          id: 1,
          name: 'Caldo de res',
          imgDir:'https://dam.cocinafacil.com.mx/wp-content/uploads/2018/04/caldito-de-res-con-bolitas-de-masa.jpg',
          detail: "Delicioso caldo de res con verduras",
          price: 50
        },
        {
          id: 2,
          name: 'Tostadas de pescado',
          imgDir:'https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/filefield_paths/tostadas-ceviche-pescado.jpg',
          detail: "Tostadas de Marlin recien sacado del rio amazonas!!",
          price: 50
        },
        {
          id: 3,
          name: 'refresco',
          imgDir:'https://www.myamericanmarket.com/10938/my-american-box-american-sodas.jpg',
          detail: "Coca, 7up, mirinda",
          price: 15
        }
      ]
    };
  },
  computed: {
    ...mapGetters([
      'getTotalAmount'
    ]),
    totalAmount(){
      let total = 0;
      let order = this.$store.getters['getOrder'];

      order.forEach(function(dish){
        total += dish.price;
      });

      return total;
    }
  },
  methods: {
    detail(dish) {
      this.$store.dispatch('selectCurrentDish', dish);
      this.$router.push({path:"detail"});
    },
  }
};
</script>
