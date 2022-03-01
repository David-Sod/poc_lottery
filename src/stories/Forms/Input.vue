<template>
  <input type="button" :class="classes" @change="onChange" :style="style" />
</template>

<script>
import './input.css';
import { reactive, computed } from 'vue';

export default {
  name: 'my-button',

  props: {
    value: {
      type: String,
      required: true,
    },
    onChange:{
      type: Function,
      required:true,
    },
    focused: {
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

  emits: ['click'],

  setup(props, { emit }) {
    props = reactive(props);
    return {
      classes: computed(() => ({
        'storybook-input': true,
        // 'storybook-button--primary': props.primary,
        // 'storybook-button--secondary': !props.primary,
        // [`storybook-button--${props.size || 'medium'}`]: true,
      })),
      onClick() {
        emit('click');
      }
    }
  },
};
</script>
