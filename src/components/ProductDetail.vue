<template>
  <div>
    <h1 class="ui header">{{product.name}}</h1>
    <div class="ui card">
      <div class="image">
        <img :src="product.img">
      </div>
      <div class="content">
        <div class="meta">
          <span class="date">{{product.price}}</span>
        </div>
        <div class="description">
          {{product.description}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import ShopApi from '@/api'

  export default {
    name: 'productDetail',
    data: function () {
      return {
        product: {}
      }
    },
    methods: {
      getProduct: function () {
        var that = this
        ShopApi.product(this.$route.params.id).then(response => {
          that.product = response.data
        })
      }
    },
    watch: {
      // call again the method if the route changes
      '$route': 'getProduct'
    },
    created: function () {
      this.getProduct()
    }
  }
</script>
