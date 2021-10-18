<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <h1 ref="greet">{{greeting}}</h1>
  <button @click="refHandler">Click me</button>
  <div v-if="showModal">
    <Modal theme="dark" @close="toggleShowModal">
      <h1>Welcome to My Web</h1>
      <p>How are you?</p>
    <template v-slot:link>
      <a href="#">Link</a>
    </template>

    </Modal>
    
  </div>
  <button @click="toggleShowModal">Show Modal</button>
  
</template>

<script>
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components:{
    Modal,
  },
  data(){
    return{
      greeting: 'My first vue app.',
      greet: "Welcome you've logged in.",
      showModal: false
    }
  },
  methods:{
    refHandler(){
      console.log(this.$refs.greet)
    },
    toggleShowModal(){
      this.showModal = !this.showModal
    },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
