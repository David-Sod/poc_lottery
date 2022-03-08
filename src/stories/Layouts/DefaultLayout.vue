<template>
  <header>
    <h1>Lottery PoC</h1>
    <Button @click="connect" :primary="true" label="Connect app" />
    <span>{{ state.signingClient }}</span>
  </header>
  <main>
    <slot></slot>
  </main>
</template>

<script>
import Button from "../components/Forms/Button.vue";
import { SigningCosmWasmClient  } from '@cosmjs/cosmwasm-stargate'
import { inject } from "vue";
export default {
  name: "default-layout",

  components: { Button },

  setup() {
    const store = inject("store");
    const { methods, state, getters } = store;
    return {
      methods,
      state,
      getters,
      async connect(){
        const chainId = 'pulsar-2'
        await window.keplr.enable(chainId);
        const offlineSigner = window.getOfflineSigner(chainId);

        const signingClient = await SigningCosmWasmClient.connectWithSigner(
            "http://api.pulsar.griptapejs.com",
            offlineSigner,
        );
        
        methods.setSigningClient(signingClient)
      }
    };
  },
};
</script>

<style>
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
header {
  width: 100%;
}
</style>