import Vue from 'vue'
import HelloComponent from './components/HelloDecorator.vue'

let v = new Vue({
  el: '#app',
  template: `
    <div>
      Name: <input v-model="name" type="text">
      <hello-component :name="name" :initialEnthusiasm="5" />
    </div>
  `,
  data: {
    name: 'world'
  },
  components: {
    HelloComponent
  }
})
