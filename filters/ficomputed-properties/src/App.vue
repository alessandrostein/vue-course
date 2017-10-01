<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ name }}</h1>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      first: 'Alessandro',
      last: 'Stein'
    }
  },

  mounted () {
    setTimeout(() => this.name = 'Vue.js Learn', 2000)
  },

  computed: {
    msgReverse () {
      return this.msg.split('').reverse().join('')
    },

    time: {
      cache: false,
      get() {
        return Date.now()
      }
    },

    name: {

      get () {
        return  `${this.first} ${this.last}`
      },

      set (v) {
        const names = v.split(' ')
        this.first = names[0]
        this.last = names[1]
      }

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
