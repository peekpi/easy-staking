<template>
    <div>
        <ValidatorPage :triger="pageTriger" :validator="validatorSelected" />
        <StakingConfirm :triger="btnTriger" :validator="validatorSelected" />
        <List border :loading="loading">
            <Scroll :on-reach-bottom="handleReachBottom" :height="scrollHeight">
                <ListItem v-for="(item, index) in validators" :key="index">
                    {{ index+1 }}
                    <ValidatorLogo :address="item.address"/>
                    <ListItemMeta
                        :title="shortName(item.name)"
                        v-on:click.native="titleClick(item)"
                    >
                        <template slot="description">
                            <span>
                                票数:
                                <b>{{ item.total_stake | ones | zeroDecimals }}</b>
                                <span></span>
                                年化:
                                <b>{{ (item.apr*(1-item.rate)) | percent }}</b>
                            </span>
                        </template>
                    </ListItemMeta>
                    <template slot="action">
                        <Button shape="circle" @click="validatorClick(item)" :loading="loging">投票</Button>
                    </template>
                </ListItem>
            </Scroll>
        </List>
    </div>
</template>
<script>
import ValidatorPage from "@/components/ValidatorPage";
import ValidatorLogo from "@/components/ValidatorLogo";
import StakingConfirm from "@/components/StakingConfirm";

import { percent, ones, zeroDecimals } from "../js/num";

//let run =false;
export default {
    name: "ValidatorList",
    components: {
        ValidatorLogo,
        StakingConfirm,
        ValidatorPage
    },
    data() {
        //this.$store.dispatch("login");
        if (this.$store.state.validators.length == 0)
            this.$store
                .dispatch("getValidators")
                .then(() => (this.loading = false))
                .catch(e => {
                    this.loading = false;
                    this.$root.message("error", e);
                });
        return {
            loading: this.$store.state.validators.length == 0,
            loging: false,
            btnTriger: false,
            pageTriger: false,
            validatorSelected: {}
        };
    },
    computed: {
        scrollHeight() {
            return document.documentElement.clientHeight - 85;
        },
        validators() {
            return this.$store.state.validators;
        }
    },
    filters: {
        ones,
        zeroDecimals,
        percent
    },
    methods: {
        shortName(name) {
            if (name.length > 25) {
                return name.slice(0, 10) + "..." + name.slice(-10);
            }
            return name;
        },
        async validatorClick(item) {
            this.loging = true;
            try {
                await this.$store.dispatch("login");
                this.btnTriger = !this.btnTriger;
                this.validatorSelected = item;
            } catch (err) {
                this.$root.message("error", err.message);
            }
            this.loging = false;
        },
        titleClick(item) {
            this.pageTriger = !this.pageTriger;
            this.validatorSelected = item;
        },
        async handleReachBottom() {
            this.loading = true;
            try {
                let amount = await this.$store.dispatch("getValidators");
                if (amount == 0) this.$root.message("info", "没有节点了");
            } catch (e) {
                this.$root.message("error", e);
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
