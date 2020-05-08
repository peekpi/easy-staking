<template>
  <div>
    <div v-if="account.address">
      地址:<a @click="login">{{ address }}</a>
      余额:{{ balance }} ONE
      我的投票>
    </div>
    <div v-else>
      <a @click="login">登录</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Account",
  data: function() {
    return {
      account: {
        address: "",
        balance: ""
      },
    };
  },
  methods: {
    login: async function() {
      if (!window.harmony) alert("please install mathwallet!");
      if (this.account.address) {
        await window.harmony.forgetIdentity();
        this.$set(this, "account", {});
      } else {
        this.account = await window.harmony.getAccount();
        const hmy = this.$root.hmy.hmy;
        let balance = await hmy.blockchain.getBalance(this.account);
        this.$set(this.account, "balance", balance.result);
      }
    }
  },
  watch: {
  },
  computed: {
    address () {
      if (this.account.address == undefined) return "";
      return this.account.address.slice(0,6) + "..." + this.account.address.slice(-4, -1);
    },
    balance (){
      if (this.account.balance == undefined) return "-";
      const hmy = this.$root.hmy.hmy;
      window.x = hmy.utils.fromWei(this.account.balance, "one");
      return parseFloat(hmy.utils.fromWei(this.account.balance, "one")).toFixed(2);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  /*display: inline-block;*/
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
