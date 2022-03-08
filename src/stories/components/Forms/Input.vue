<template>
  <input v-model="model" :disabled="loading" :class="classes" />
</template>

<script>
import './input.css';
import { reactive, computed } from 'vue';

export default {
  name: 'my-button',

  props: {
    loading: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      validator: function (value) {
        return ['small', 'medium', 'large'].indexOf(value) !== -1;
      },
    }
  },

  emits: ['inputChange'],

  setup(props, { emit }) {
    props = reactive(props);
    return {
      classes: computed(() => ({
        'storybook-input': true,
        'storybook-input--primary': props.primary,
        'storybook-input--secondary': !props.primary,
        [`storybook-input--${props.size || 'medium'}`]: true,
      })),
      onChange(event) {
        emit('inputChange',event);
      }
    }
  },
};
</script>
