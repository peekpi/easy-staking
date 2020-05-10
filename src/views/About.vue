<template>
  <div>
    <Button :type="xx?'primary':'default'" @click="xx=!xx">switch</Button>
    <Account/>
    <ValidatorList v-if="xx" />
    <Delegations v-else/>
  </div>
</template>
<script>
import ValidatorList from "@/components/ValidatorList";
import Delegations from "@/components/Delegations";
import Account from "@/components/Account";

export default {
  name: "AboutHome",
  components: {
    Account,
    ValidatorList,
    Delegations
  },
  data() {
    window.about=this;
    return {
      xx: true,
    };
  },
  methods: {
  }
};
</script>

