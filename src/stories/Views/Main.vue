<template>
    <section class="wrapper_section">
      <h2>Wrap SCRT to sSCRT</h2>
      <Balance :balance="getters.humanBalance"/>
      <Input type="number" v-model="state.fromInput" size="large" placeholder="Enter your secret amount" :loading="state.loading"/>
      <span>{{state.fromInput}}</span>

      <Button @click="methods.wrap" :primary="true" size="large" label="WRAP"/>
    </section>
</template>

<script>
import Button from '../components/Forms/Button.vue';
import Input from '../components/Forms/Input.vue';
import Balance from '../components/Labels/Balance.vue';
import { inject } from 'vue';
export default {
  name: 'main-view',

  components: { Button, Input, Balance },
  async mounted(){

  },
  setup() {
    const store = inject('store')
    const { methods, state , getters} = store;
    return {
      methods,
      state,
      getters
    }
  },
};
</script>

<style scoped>
.wrapper_section{
  display: flex;
  flex-direction: column;
  width: 400px;
  gap: 5px 0;
}
</style>