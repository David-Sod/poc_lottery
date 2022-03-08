<template>
  <span>{{ balance }}</span>
</template>

<script>
export default {
  name: 'my-balance',

  props: {
    balance: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
span{
    font-weight: 500;
    color:black;
}
</style>