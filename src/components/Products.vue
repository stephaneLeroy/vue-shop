<template>
  <div>
    <h1 class="ui header">Products</h1>
    <div class="ui divided items" >
      <product v-for="product in products" :product="product" :key="product.id"></product>
    </div>
  </div>
</template>

<script>
  import Product from '@/components/Product'

  export default {
    components: {
      'product': Product
    },
    name: 'products',
    data: function () {
      return { products: [{
        'id': 1,
        'name': 'Rouge à lèvre',
        'price': '50€',
        'img': '/static/rouge_a_levres.jpg'
      },
      {
        'id': 2,
        'name': 'Lait d\'amande',
        'price': '10€',
        'img': '/static/amande_concentre_de_lait.jpg'
      },
      {
        'id': 3,
        'name': 'Eau de parfum',
        'price': '30€',
        'img': '/static/vaporisateur_eau_de_parfum.jpg'
      }] }
    }
  }
</script>
