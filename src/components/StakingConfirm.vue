<template>
  <div>
    <Modal v-model="enable" width="360" :closable="false" :mask-closable="false" @on-ok="ok">
      <p slot="header" style="color:#f60;text-align:center">
        <span>投票给 <i>{{ validator.name }}</i></span>
      </p>
      <div style="text-align:center">
        <Input v-model="amount" placeholder="数量">
          <Icon type="logo-bitcoin" slot="prepend" />
          <span slot="append">ONE</span>
        </Input>
        <Slider v-model="persent" :step="0.1"/>
      </div>
    </Modal>
  </div>
</template>
<script>
export default {
  data() {
    return {
      enable: false,
      modal_loading: false,
      amount: 1000,
    };
  },
  props: ["triger","validator"],
  methods: {
    async ok() {
        console.log("-----ok");
      //this.modal_loading = true;
      const hmy = this.$root.hmy;
      let account = await  hmy.login();
      let amount = new hmy.hmy.utils.Unit(this.amount).asOne().toHex();
      let tx = hmy.delegate(account.address, this.validator.address, amount);
      await window.harmony.signTransaction(tx);
      tx.sendTransaction();
    }
  },
  watch: {
    triger() {
      if (!this.enable) this.enable = true;
    }
  },
  computed:{
      persent: {
          set(val){
              let cur = this.amount/10000;
              if(cur.toFixed(1) != val.toFixed(1))
                this.amount = val*10000;
          },
          get(){
              return this.amount/10000;
          }
      }
  }
};
</script>
