<template>
  <default-layout>
    <router-view/>
  </default-layout>
</template>

<script>
import { provide } from 'vue'
import store from '@/stores';
import DefaultLayout from './stories/Layouts/DefaultLayout.vue'

export default {
  name: 'App',
  components:{ DefaultLayout },
  setup(){
    provide('store',store);
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
