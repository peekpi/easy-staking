<template>
    <div>
        <ValidatorPage :triger="pageTriger" :validator="validatorSelected" />
        <StakingConfirm :triger="btnTriger" :validator="validatorSelected" />
        <List border :loading="loading">
            <Scroll :on-reach-bottom="handleReachBottom" :height="scrollHeight">
                <ListItem v-for="(item, index) in validators" :key="index">
                    {{ index }}
                    <Avatar class="li-validator-image" :alt="item.address" :address="item.address" />
                    <ListItemMeta
                        :title="shortName(item.name)"
                        v-on:click.native="titleClick(item)"
                    >
                        <template slot="description">
                            <span>
                                票数:
                                <b>{{ description(item) }}</b>
                                <span></span>
                                年化:
                                <b>{{ expectedRetrun(item) }}%</b>
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

import Avatar from "@/components/common/Avatar";
import StakingConfirm from "@/components/StakingConfirm";

//let run =false;
export default {
    name: "ValidatorList",
    components: {
        Avatar,
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
                    this.message("error", e);
                });
        return {
            loading: this.$store.state.validators.length == 0,
            loging: false,
            btnTriger: false,
            pageTriger: false,
            validatorSelected: {},
            scrollHeight:document.documentElement.clientHeight-85
        };
    },
    computed: {
        validators() {
            return this.$store.state.validators;
        }
    },
    methods: {
        message(type, content) {
            this.$Message[type]({
                background: true,
                content,
                duration: 3
            });
        },
        shortName(name) {
            if (name.length > 25) {
                return name.slice(0, 10) + "..." + name.slice(-10);
            }
            return name;
        },
        description(item) {
            return Math.floor(item.total_stake / 1e18).toString();
        },
        expectedRetrun(item) {
            return (item.apr * 10).toFixed(2);
        },
        async validatorClick(item) {
            this.loging = true;
            try {
                await this.$store.dispatch("login");
                this.btnTriger = !this.btnTriger;
                this.validatorSelected = item;
            } catch (err) {
                this.message("error", err.message);
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
                await this.$store.dispatch("getValidators");
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

<style lang="scss">
.li-validator-image {
    border-radius: 0.25rem;
    height: 30px;
    width: 30px;
    border: 1px solid var(--bc-dim);
    margin: 0px 10px;
}
</style>
