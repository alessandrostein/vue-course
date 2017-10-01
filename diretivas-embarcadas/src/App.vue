<template>
  <div id="app" v-show="!canI">
    <img src="./assets/logo.png">
    <h1 v-text="text"></h1>
    <div v-html="html"></div>
    <h3 v-once> {{ text }}</h3>
    <a v-bind:href="link">Site do Ale</a>
    <a :href="link">Site do Ale</a>

    <button type="button" v-on:click="hello">Botão</button>
    <button type="button" @click="hello">Botão</button>
    <button type="button" @submit.prevent="hello">Botão</button>
    <button type="button" @keyup.enter="hello">Botão</button>

    <h1 v-if="canI">Testo de If</h1>

    <h1 ref="target">Testo do Ref</h1>

    <input type='text' v-model.lazy="name">

    <input type='number' v-model.number="idade">

    <p>
      {{ name }} - {{ idade }}
    </p>

    <ul>
      <li v-for="item in list">{{item}}</li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      text: 'Texto',
      html: '<h1>Alessandro</h1>',
      link: 'http://www.alessandrostein.com',
      canI: false,
      name: '',
      idade: 2,
      items: ['banana', 'pera', 'uva', 'maça', 'abacaxi']
    }
  },

  mounted () {
    setTimeout(() => this.text = 'Mudou o texto', 2000)
    console.log(this.$refs.target);
  },

  methods: {
    hello () {
      alert("Hello")
    }
  },

  computed: {
    list () {
      return this.items.sort()
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
