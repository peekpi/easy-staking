<template>
    <Layout>
        <Header>
            <img v-if="true" src="../img/logo-top-right.png" class="logo"/>
        </Header>
        <Content>
            <Account v-model="delegate" />
            <ValidatorList v-if="delegate" />
            <Delegations v-else />
        </Content>
    </Layout>
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
            delegate: true
        };
    },
    methods: {}
};
</script>

<style scoped>
.logo {
  margin-top: 0.5em;
}
.ivu-layout-header {
  padding: 0 1em;
}
</style>