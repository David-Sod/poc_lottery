import MyInput from './Input.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Input',
  component: MyInput,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    onChange: {},
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { MyInput },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<my-input v-bind="args" />',
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  primary: true,
  value: 'my input',
};
// Primary.storyName=" yo Im primary"
export const InputLoading = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
InputLoading.args = {
  primary: true,
  value: 'my input loading',
  loading: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  value: 'my input',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  value: 'my input',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  value: 'Button',
};
