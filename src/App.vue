<template>
  <Page @createAccount="createAccount" @logout="logout" @login="login" :user="user"/>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Page from './stories/Page.vue'

export default {
  name: 'App',
  components: {
    Page
  },
  data(){
    return {
      user:{}
    }
  },
  methods:{
    createAccount(){
      console.log('Create account')
      this.user = {
        name:'some name'
      };
    },
    logout(){
      console.log('Logging out')
      this.user = undefined;
    },
    login(){
      console.log('Logging in')
      this.user={
        name:''
      }
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
