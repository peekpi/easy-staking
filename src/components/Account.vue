<template>
    <div class="margin">
        <div v-if="account.address">
            <span>
                地址:
                <a @click="login" :title="account.address" >{{ address }}</a>
                余额:<span :title="account.balance.wei.toString()">{{ balanceOne | twoDecimals }}</span> ONE
            </span>
            <span  @click.prevent="clickRecord" class="record">
            <RadioGroup v-model="record" type="button" size="small">
                <Radio label="true" :style='record=="true"?"background: #dcdee2":""'>{{ record=="true"?"返回":"我的记录" }}</Radio>
            </RadioGroup>
            </span>
        </div>
        <div v-else>
            <Button type="text" size="small" @click="login" :loading="loging"><span style="font-size: 1.2em">登录</span></Button>
        </div>
    </div>
</template>

<script>
import { twoDecimals } from "../js/num";
export default {
    name: "Account",
    data: function() {
        return {
            record: "",
            loging:false,
        };
    },
    model: {
        prop: "checked",
        event: "change"
    },
    props: ["checked"],
    methods: {
        clickRecord(){
            this.record = this.record=="true"?"":"true";
            this.$emit('change', this.record!="true");
        },
        login: async function() {
            this.loging=true;
            try {
                await this.$store.dispatch("logout");
                await this.$store.dispatch("login");
            } catch (err) {
                this.$root.message("error", err.message);
            }
            this.loging=false;
        }
    },
    filters: { twoDecimals } ,
    computed: {
        address() {
            if (this.account.address == undefined) return "";
            return (
                this.account.address.slice(0, 6) +
                "..." +
                this.account.address.substr(-4)
            );
        },
        balanceOne() {
            return this.account.balance.toOne();
        },
        account() {
            return this.$store.state.account;
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.margin {
    margin-left: 1em;
    height: 1.59em;
    overflow:hidden;
    font-size: 1.1em;
}
.record {
    float:right;
}
/*
.ivu-radio-group-button .ivu-radio-wrapper {
    background: red;
}*/
a {
    color: #42b983;
}
</style>
