<template>
  <Main buttonLabel="Swap your tokens" :fromValue="fromValue" @swap="swap" @onInputFromChange="onInputChange"/>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Main from './stories/Views/Main.vue'

export default {
  name: 'App',
  components: {
    Main
  },
  data(){
    return {
      fromValue:''
    }
  },
  methods:{
    onInputChange(event){
      this.fromValue=event.target.value;
    },
    swap(event){
      console.log(event);
    }
  },
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
