<template>
    <div>
        <StakingCancel
            :triger="btnTriger"
            :validator="validatorSelected"
        />
        <ValidatorPage
            :triger="pageTriger"
            :validator="validatorInfo"
        />
        <List border :loading="loading">
            <Scroll :height="scrollHeight">
                <ListItem v-for="(item, index) in delegations" :key="index">
                    {{ index }}                    
                    <ValidatorLogo :address="item.validator_address"/>
                    <ListItemMeta
                        :title="shortName(item.validator_info.name)"
                        v-on:click.native="titleClick(item)"
                    >
                        <template slot="description">
                            <span>
                                我的票数:
                                <b>{{ item.amount | ones | twoDecimals }}</b>
                                <span></span>
                                我的收益:
                                <b>{{ item.reward | ones | twoDecimals }}</b>
                                <span></span>
                                赎回中:
                                <b>{{ totalLocked(item.Undelegations) | ones | twoDecimals }}</b>
                            </span>
                        </template>
                    </ListItemMeta>
                    <template slot="action">
                        <Button shape="circle" @click="validatorClick(item)">取回投票</Button>
                    </template>
                </ListItem>
            </Scroll>
        </List>
    </div>
</template>
<script>
import ValidatorPage from "@/components/ValidatorPage";
import ValidatorLogo from "@/components/ValidatorLogo";
import StakingCancel from "@/components/StakingCancel";

import { ones, twoDecimals } from "../js/num";

//let run =false;
export default {
    name: "ValidatorList",
    components: {
        ValidatorLogo,
        StakingCancel,
        ValidatorPage
    },
    data() {
        //this.$store.dispatch("login");
        //if(this.$store.state.delegations.length == 0)
        this.$store
            .dispatch("updateDelegations")
            .then(() => (this.loading = false))
            .catch(e => {
                this.loading = false;
                this.message("error", e);
            });
        return {
            loading: this.$store.state.delegations.length == 0,
            btnTriger: false,
            pageTriger: false,
            validatorSelected: {},
            validatorInfo:{}
        };
    },
    computed: {
        scrollHeight(){return document.documentElement.clientHeight-85},
        delegations() {
            return this.$store.state.delegations;
        }
    },
    filters:{ones, twoDecimals },
    methods: {
        message(type, content) {
            this.$Message[type]({
                background: true,
                content,
                duration: 5
            });
        },
        shortName(name) {
            if (name.length > 25) {
                return name.slice(0, 10) + "..." + name.slice(-10);
            }
            return name;
        },
        totalLocked(undelegations) {
            let sum = 0;
            undelegations.map(x => {
                sum += x.Amount ? x.Amount : 0;
            });
            return sum;
        },
        titleClick(item) {
            this.pageTriger = !this.pageTriger;
            this.validatorInfo = item.validator_info;
        },
        async validatorClick(item) {
            this.btnTriger = !this.btnTriger;
            this.validatorSelected = item;
        },
        async handleReachBottom() {
            this.loading = true;
            try {
                await this.$store.dispatch("updateDelegations");
            } catch (e) {
                this.message("error", e);
            }
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
