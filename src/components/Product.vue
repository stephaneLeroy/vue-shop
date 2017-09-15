<template>
  <div class="item">
    <div class="image">
      <img :src="product.img">
    </div>
    <div class="middle aligned content">
      <router-link :to="{name:'product', params:{id: product.id}}" class="header">{{product.name}}</router-link>
      <div class="meta">
        <span>{{product.price}}</span>
      </div>
      <div class="extra">
        <div class="ui right floated primary button" v-on:click="addToCart">
          Ajouter
          <i class="right chevron icon"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'product',
    props: ['product'],
    methods: {
      addToCart: function () {
        this.$store.commit('addToCart', this.product)
      }
    }
  }
</script>
