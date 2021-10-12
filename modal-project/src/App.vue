<template>
  <Modal/>
  <img alt="Vue logo" src="./assets/logo.png">
  <h1 ref="greet">{{greeting}}</h1>
  <button @click="refHandler">Click me</button>
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
      greeting: 'My first vue app.'
    }
  },
  methods:{
    refHandler(){
      console.log(this.$refs.greet)
    }
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
