<template>
  <div>
  <StakingConfirm :triger="btnTriger" :validator="validatorSelected"/>
  <List border :loading="loading">
    <Scroll :on-reach-bottom="handleReachBottom" height="600">
      <ListItem v-for="(item, index) in validators" :key="index">
        {{ index }}
        <Avatar
          class="li-validator-image"
          :alt="item.address"
          :address="item.address"
        />
        <ListItemMeta
          :title="shortName(item.name)"
          :description="shortName(item.address)"
        />
        <template slot="action">
          <Button shape="circle" @click="validatorClick(item)">投票</Button>
        </template>
      </ListItem>
    </Scroll>
  </List>
  </div>
</template>
<script>
//import Validator from "@/components/ValidatorName";

import Avatar from "@/components/common/Avatar";
import StakingConfirm from "@/components/StakingConfirm";

//let run =false;
export default {
  name: "ValidatorList",
  components: {
    Avatar,
    StakingConfirm
  },
  data() {
    if(this.$store.state.validators.length == 0)
      this.$store.dispatch("getValidators").then(() => (this.loading = false));
    return { 
      loading: this.$store.state.validators.length == 0,
      btnTriger: false,
      validatorSelected:{},
    };
  },
  computed: {
    validators() {
      return this.$store.state.validators;
    }
  },
  methods: {
    shortName(name){
      if(name.length>25){
        return name.slice(0,10) + "..." + name.slice(-10)
      }
      return name;
    },
    validatorClick(item) {
      this.btnTriger = !this.btnTriger;
      this.validatorSelected = item;
    },
    async handleReachBottom() {
      this.loading = true;
      await this.$store.dispatch("getValidators");
      this.loading = false;
      //return new Promise(resolve => resolve());
      //if(run) return null;
      //return new Promise(resolve => {
      //  this.$store.dispatch("getValidators").then(()=>{resolve();run=false;});
      //});
    }
  }
};
</script>

<style lang="scss">
.li-validator-image {
  border-radius: 0.25rem;
  height: 30px;
  width: 30px;
  border: 1px solid var(--bc-dim);
  margin: 0px 10px;
}
</style>
