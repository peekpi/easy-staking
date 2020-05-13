<template>
    <Layout>
        <Header>
            <img v-if="true" src="../img/logo-top-right.png" class="logo" />
            <div class="topright">
                <Button type="text" ghost @click="enable=true">投票规则</Button>
            </div>
            <Modal footer-hide v-model="enable" fullscreen title="投票规则">
              <List :split=false>
                <ListItem v-for="(rule, index) in stakingRules" :key="index">
                  {{ index }}. {{ rule }}
                </ListItem>
                </ListItem>
              </List>
            </Modal>
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

const stakingRules = require("../js/stakingRules.json");

export default {
    name: "StakingHome",
    components: {
        Account,
        ValidatorList,
        Delegations
    },
    data() {
        return {
            stakingRules,
            enable: false,
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
    padding: 0 0 0 1em;
}
.topright {
    float: right;
    /*position: absolute;
    right: 0px;
    top:0px;*/
    line-height: 0;
    padding: 0;
}
</style>