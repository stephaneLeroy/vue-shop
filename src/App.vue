<template>
  <div>
    <div class="ui fixed inverted menu">
      <div class="ui container">
        <router-link :to="{ name: 'products'}" class="header item">
          <i class="shopping bag icon"></i>
          Vue shop
        </router-link>
        <div class="right item">
          <i class="cart icon"></i>
          <router-link :to="{ name: 'cart'}" >Panier</router-link>
          <div class="horizontal ui teal label">{{cartCount}}</div>
        </div>
      </div>
    </div>

    <div class="ui main centered text container">
      <router-view></router-view>
    </div>

    <div class="ui inverted vertical footer segment">

      <div class="ui horizontal inverted small divided link list">
        <i class="shopping bag icon"></i>
        <a class="item" href="#">Site Map</a>
        <a class="item" href="#">Contact Us</a>
        <a class="item" href="#">Terms and Conditions</a>
        <a class="item" href="#">Privacy Policy</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  computed: {
    cartCount: function () {
      return this.$store.getters.cartCount
    }
  }
}
</script>

<style type="text/css">
  body {
    background-color: #FFFFFF;
  }
  .main.container {
    margin-top: 7em;
  }
  .ui.footer.segment {
    margin: 5em 0em 0em;
    padding: 5em 0em;
  }
</style>
