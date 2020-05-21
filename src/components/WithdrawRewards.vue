<template>
    <Button shape="circle" size="small" :loading="loading" @click="click" ><span>取回</span></Button>
</template>
<script>
let txUrl = id=>`https://explorer.harmony.one/#/tx/${id}`
export default {
    data(){
        return {loading: false}
    },
    methods:{
        async click(){
            this.loading = true;
            try {
                if(this.$store.state.totalRewards == 0)
                    throw {message:"无收益可提取"}
                const hmy = this.$root.hmy;
                let account = this.$store.state.account;
                let tx = hmy.withdrawReward(account.address);
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
            this.loading = false;
        }
    }
}
</script>