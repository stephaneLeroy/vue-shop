<template>
  <div>
    <h1 class="ui header">Panier</h1>
    <div class="ui middle aligned celled list">
      <div class="item" v-for="item in cart" :key="item.product.id" >
        <img class="ui tiny image" :src="item.product.img">
        <div class="content">
          <div class="header">{{item.product.name}} </div>
        </div>
        <span class="ui label right floated">{{item.quantity}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'cart',
    computed: {
      cart: function () {
        return this.$store.state.cart
      }
    }
  }
</script>
