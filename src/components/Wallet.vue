<template>
  <div>
    <button v-on:click=login>loginMsg</button>
    <div>
      <h3>name: {{ account.name }} </h3>
      <h3>address: {{ account.address }} </h3>
      <h2 v-bind:title="toOne(account.balance, 0)">balance: {{ toOne(account.balance, 18) }} ONE</h2>
    </div>
    <div>
      <label>to:</label><input v-model="transferTo" placeholder="address" value="one1s5sqy8ufg5pegfzv6j4a5n879udsaasu2u5hdp"><br>
      <label>amount:</label><input v-model="transferRAW" placeholder="amount" value="1"> ONE<br>
      <button v-on:click="transfer">transfer</button>
      <br>
      {{ transferAmount }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Wallet',
  data: function(){
    return {
      account:{},
      transferTo:0,
      transferAmount:0,
      transferRAW:null,
      counter:1
    };
  },
  methods:  {
    login: async function(){
      if(!window.harmony) alert("please install mathwallet!");
      if(this.account.address){
        await window.harmony.forgetIdentity();
        this.account = {};
      }else{
        this.account = await window.harmony.getAccount();
        const hmy = this.$root.hmy.hmy;
        let balance = await hmy.blockchain.getBalance(this.account);
        this.$set(this.account, "balance", balance.result);
      }
    },
    toOne: function(amount, unit){
        if(!amount) return '-';
        const hmy = this.$root.hmy.hmy;
        if(unit==0) return hmy.utils.hexToNumber(amount);
        return hmy.utils.hexToNumber(amount)/(10**unit);
    },
    transfer: function(){
        const hmy = this.$root.hmy;
        let tx = hmy.transfer(this.account.address, this.transferTo, this.transferAmount);
        console.log(tx);
        window.tx = tx;
    }
  },
  watch: {
    transferRAW: function(){
        try {
          const hmy = this.$root.hmy.hmy;
          this.transferAmount = hmy.utils.toWei(this.transferRAW, "one");
        } catch {
          this.transferAmount = 0;
        }
    }
  },
  computed: {

  }
}
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
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
