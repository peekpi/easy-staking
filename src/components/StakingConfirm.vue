<template>
    <Modal
        v-model="enable"
        width="360"
        :loading="true"
        :closable="false"
        :mask-closable="false"
    >
        <p slot="header" style="color:#f60;text-align:center">
            <span>
                投票给
                <i>{{ validator.name }}</i>
            </span>
        </p>
        <div>
            <Input v-model="amount" placeholder="数量">
                <Icon type="logo-bitcoin" slot="prepend" />
                <span slot="append">ONE</span>
            </Input>
            <span style="font-size:smaller">
                可用余额: {{ balanceOne | twoDecimals }}
                <b>ONE</b>
            </span>
            <Slider v-model="persent" :step="0.1" />
        </div>
        <div slot="footer">
            <Button type="text" @click="enable=false">取消</Button>
            <Button type="primary" :loading="loading" @click="ok">确定</Button>
        </div>
    </Modal>
</template>
<script>
import { twoDecimals } from "../js/num";

let txUrl = id=>`https://explorer.harmony.one/#/tx/${id}`
export default {
    data() {
        return {
            enable: false,
            amount: 1000,
            loading: false
        };
    },
    props: ["triger", "validator"],
    filters: { twoDecimals },
    methods: {
        async ok() {
            this.loading = true;
            try {
                if(this.amount < 1000)
                    throw {message:"至少需要 1000 One"}
                if(this.balanceOne - this.amount < 1)
                    throw {message:"请留出一些手续费"}
                const hmy = this.$root.hmy;
                let account = this.account;
                let amount = new hmy.hmy.utils.Unit(this.amount)
                    .asOne()
                    .toHex();
                let tx = hmy.delegate(
                    account.address,
                    this.validator.address,
                    amount
                );
                let msgObj = null;
                await this.$store.dispatch("txCommit", {
                    tx,
                    fun:() =>{
                        msgObj && msgObj();
                        if (tx.isConfirmed())
                            this.$root.message("success", "<a target=_blank href="+txUrl(tx.id)+">交易</a>已打包");
                        else this.$root.message("warning", "<a target=_blank href="+txUrl(tx.id)+">交易</a>仍未打包");
                    }
                });
                msgObj = this.$root.message("loading", "<a target=_blank href="+txUrl(tx.id)+">交易</a>已发送，等待打包。");
                this.enable = false;
            } catch (err) {
                this.$root.message("error", err.message ? err.message : err);
            }
            this.loading = false;
        }
    },
    watch: {
        triger() {
            if (!this.enable) this.enable = true;
        }
    },
    computed: {
        persent: {
            set(val) {
                try {
                    let balanceOne = Math.floor(this.balanceOne);
                    let cur = (this.amount * 100) / balanceOne;
                    if (cur.toFixed(1) != val.toFixed(1))
                        this.amount = Math.floor((val * balanceOne) / 100);
                } catch {
                    return 0;
                }
            },
            get() {
                try {
                    let balanceOne = Math.floor(this.balanceOne);
                    return (this.amount * 100) / balanceOne;
                } catch {
                    return 0;
                }
            }
        },
        account() {
            return this.$store.state.account;
        },
        balanceOne() {
            try {
                return this.account.balance.toOne();
            } catch {
                return 0;
            }
        }
    }
};
</script>
