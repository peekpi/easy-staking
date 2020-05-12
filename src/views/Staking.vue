<template>
  <div>
    <br>
    <Account v-model="delegate"/>
    <ValidatorList v-if="delegate" />
    <Delegations v-else/>
  </div>
</template>
<script>
import ValidatorList from "@/components/ValidatorList";
import Delegations from "@/components/Delegations";
import Account from "@/components/Account";

export default {
  name: "StakingHome",
  components: {
    Account,
    ValidatorList,
    Delegations
  },
  data() {
    return {
      delegate: true,
    };
  },
  methods: {
  }
};
</script>

