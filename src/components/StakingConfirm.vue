<template>
  <div>
    <Modal
      v-model="enable"
      width="360"
      :loading="true"
      :closable="false"
      :mask-closable="false"
      @on-ok="ok"
    >
      <p slot="header" style="color:#f60;text-align:center">
        <span>
          投票给
          <i>{{ validator.name }}</i>
        </span>
      </p>
      <div >
        <Input v-model="amount" placeholder="数量">
          <Icon type="logo-bitcoin" slot="prepend" />
          <span slot="append">ONE</span>
        </Input>
        <span style="font-size:smaller">可用余额: {{ parseFloat(balanceOne).toFixed(2) }} <b>ONE</b></span>
        <Slider v-model="persent" :step="0.1" />
      </div>
    </Modal>
  </div>
</template>
<script>
export default {
  data() {
    window.x = this;
    return {
      enable: false,
      amount: 1000
    };
  },
  props: ["triger", "validator"],
  methods: {
    message(type, content) {
      this.$Message[type]({
        background: true,
        content,
        duration: 3
      });
    },
    async ok() {
      try {
        const hmy = this.$root.hmy;
        let account = this.account;
        let amount = new hmy.hmy.utils.Unit(this.amount).asOne().toHex();
        let tx = hmy.delegate(account.address, this.validator.address, amount);
        await window.harmony.signTransaction(tx);
        let ret = await tx.sendTransaction();
        if(ret[1].slice(0,2) != "0x")
            throw {message:ret[1]};
        this.message("success", "交易哈希:"+ret[1]);
      } catch (err) {
        console.log("err:", err);
        let message = "失败";
        if (err.message) message = err.message;
        this.message("error", message);
      }
      this.enable = false;
    }
  },
  watch: {
    triger() {
      if (!this.enable) this.enable = true;
    }
  },
  computed: {
    persent: {
      set(val) {
        try{
            let balanceOne = Math.floor(this.balanceOne);
            let cur = this.amount * 100 / balanceOne;
            if (cur.toFixed(1) != val.toFixed(1)) this.amount = Math.floor(val * balanceOne / 100);
        }catch{
            return 0;
        }
      },
      get() {
        try{
            let balanceOne = Math.floor(this.balanceOne);
            return this.amount * 100 / balanceOne;
        }catch{
            return 0;
        }
      }
    },
    account(){
        return this.$store.state.account;
    },
    balanceOne(){
        try{
            return this.account.balance.toOne()
        }catch{
            return 0;
        }
    }
  }
};
</script>
