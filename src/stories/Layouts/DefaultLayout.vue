<template>
  <header>
    <h1>Lottery PoC</h1>
    <Button @click="connectApp" :primary="true" label="Connect app" />
    <span>{{ state.signingClient }}</span>
  </header>
  <main>
    <slot></slot>
  </main>
</template>

<script>
import Button from "../components/Forms/Button.vue";
import { SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";
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
      async connectApp() {
        console.log("connecting app");
        const chainId = "pulsar-2";
        await window.keplr.enable(chainId);

        const offlineSigner = window.getOfflineSigner(chainId);

        const res = new SigningCosmWasmClient().connectWithSigner(
          "http://rpc.pulsar.stakeordie.com:26657/",
          offlineSigner
        );
        methods.setSigningClient(res);
        console.log(res)
      },
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