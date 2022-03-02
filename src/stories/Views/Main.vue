<template>
  <main>
    <h1>Hello from Main</h1>
    <h2>Counter state: {{ state.counter }}</h2>
    <Button @click="methods.decreaseCounter" :primary="false" size="large" label="-"/>
    <Button @click="methods.reset" :primary="false" size="large" label="reset"/>
    <Button @click="methods.increaseCounter" :primary="true" size="large" label="+"/>
  </main>
</template>

<script>
import Button from '../Forms/Button.vue';
import { inject } from 'vue';
export default {
  name: 'main-view',

  components: { Button },

  setup() {
    const store = inject('store')
    const { methods, state } = store;
    return {
      methods,
      state
    }
  },
};
</script>
