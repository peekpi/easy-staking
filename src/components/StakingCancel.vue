<template>
    <Modal
        v-model="enable"
        width="360"
        :loading="true"
        :closable="false"
        :mask-closable="false"
        @on-ok="ok"
    >
        <p slot="header" style="color:#f60;text-align:center">
            <span>
                取消
                <i>{{ validator.validator_info?validator.validator_info.name:'' }}</i>
                的投票
            </span>
        </p>
        <div>
            <Input v-model="amount" placeholder="数量">
                <img src="../img/icon.jpg" class="icon" slot="prepend"/>
                <span slot="append">ONE</span>
            </Input>
            <span style="font-size:smaller">
                我的投票: {{ balanceOne | twoDecimals }}
                <b>ONE</b>
            </span>
            <Slider v-model="persent" :tip-format="x=>x+'%'" :step="0.1" />
        </div>
    </Modal>
</template>
<script>
import { twoDecimals } from "../js/num";

let txUrl = id=>`https://explorer.harmony.one/#/tx/${id}`
export default {
    data() {
        window.x = this;
        return {
            enable: false,
            amount: 1000
        };
    },
    props: ["triger", "validator"],
    filters: {twoDecimals},
    methods: {
        async ok() {
            try {
                const hmy = this.$root.hmy;
                let account = this.account;
                let amount = new hmy.hmy.utils.Unit(this.amount)
                    .asOne()
                    .toHex();
                let tx = hmy.undelegate(
                    account.address,
                    this.validator.validator_address,
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
            } catch (err) {
                this.$root.message("error", err.message ? err.message : err);
            }
            this.enable = false;
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
                return this.validator.amount / 1e18;
            } catch {
                return 0;
            }
        }
    }
};
</script>
