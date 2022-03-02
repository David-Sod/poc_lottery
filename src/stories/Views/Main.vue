<template>
  <main>
   <FromInput :loading="loading" @inputChange="onChange" :value="fromValue"/>
   <Button @click="$emit('swap')" :primary="true" size="medium" :label="buttonLabel"/>
  </main>
</template>

<script>
import FromInput from '../Forms/Input.vue';
import Button from '../Forms/Button.vue';
import { reactive } from 'vue';
export default {
  name: 'main-view',

  components: { FromInput, Button },

  props: {
    fromValue: {
      type: String,
    },
    loading: {
      type: Boolean,
    },
    buttonLabel: {
      type: String,
    },
  },

  emits: ['swap', 'onInputFromChange'],
  setup(props, { emit }) {
    props = reactive(props);
    return {
      onChange(event) {
        emit('onInputFromChange',event);
      }
    }
  },
};
</script>
