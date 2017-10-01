import Vue from 'vue'
import App from './App.vue'

new Vue({
  el: '#app',

  render: h => h(App)
  // This is the same that below

  // render (createElement) {
  //   return createElement(App)
  // }

  // h is equals $createElement (short hand)

  // render (createElement) {
  //   return createElement('h1', {
  //     attrs: {
  //       id: 'ale'
  //     },
  //     domProps: {
  //       innerHTML: 'Hello Alessandro!'
  //     }
  //   }, [])
  // }

  // render (createElement) {
  //   return createElement('h1', {
  //     attrs: {
  //       id: 'ale'
  //     }
  //   }, 'Hello Alessandro!')
  // }

  // createElement(tagHtml, Atributos, Filhos da tagHTML)

  // render (createElement) {
  //   return createElement('div', {
  //     attrs: {
  //       id: 'ale',
  //       class: 'teste',
  //       style: 'background-color: blue;'
  //     }
  //   }, [
  //     createElement('h1', 'Hello from h1'),
  //     createElement('p', 'Hello from p')
  //   ])
  // }
})
