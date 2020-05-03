<template>
  <div>
    <Layout class="layout">
      <Header></Header>
      <Content>
        <Button @click="login" type="primary">login</Button>
        <div>
          <h3>name: {{ account.name }}</h3>
          <h3>address: {{ account.address }}</h3>
          <h3 v-bind:title="toOne(account.balance, 0)">balance: {{ toOne(account.balance, 18) }} ONE</h3>
        </div>
        <div>
          <label>to:</label>
          <Input v-model="transferTo" placeholder="address" />
          <br />
          <label>amount:</label>
          <Input v-model="transferRAW">
            <Select v-model="unit" slot="append" style="width: 70px">
              <Option value="one">ONE</Option>
              <Option value="wei">wei</Option>
            </Select>
          </Input>
          <br />
          <Button type="primary" @click="transfer">transfer</Button>
          <br />
          {{ transferAmount }}
        </div>
      </Content>
      <Footer></Footer>
    </Layout>
  </div>
</template>

<script>
export default {
  name: "Wallet",
  data: function() {
    return {
      account: {},
      transferTo: 0,
      transferAmount: 0,
      transferRAW: null,
      unit: "wei"
    };
  },
  methods: {
    login: async function() {
      if (!window.harmony) alert("please install mathwallet!");
      if (this.account.address) {
        await window.harmony.forgetIdentity();
        this.account = {};
      } else {
        this.account = await window.harmony.getAccount();
        const hmy = this.$root.hmy.hmy;
        let balance = await hmy.blockchain.getBalance(this.account);
        this.$set(this.account, "balance", balance.result);
      }
    },
    toOne: function(amount, unit) {
      if (!amount) return "-";
      const hmy = this.$root.hmy.hmy;
      if (unit == 0) return hmy.utils.hexToNumber(amount);
      return hmy.utils.hexToNumber(amount) / 10 ** unit;
    },
    transfer: function() {
      const hmy = this.$root.hmy;
      let tx = hmy.transfer(
        this.account.address,
        this.transferTo,
        this.transferAmount
      );
      window.tx = tx;
      window.harmony.signTransaction(tx);
      tx.sendTransaction();
    }
  },
  watch: {
    transferRAW: function() {
      try {
        const hmy = this.$root.hmy.hmy;
        this.transferAmount = hmy.utils.toWei(this.transferRAW, "one");
      } catch {
        this.transferAmount = 0;
      }
    }
  },
  computed: {}
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
