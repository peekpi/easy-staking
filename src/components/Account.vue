<template>
    <div>
        <div v-if="account.address">
            地址:
            <a @click="login">{{ address }}</a>
            余额:{{ parseFloat(balanceOne).toFixed(2) }} ONE
            <Button type="text" @click="$emit('change', !checked);">我的投票</Button>
        </div>
        <div v-else>
            <a @click="login">登录</a>
        </div>
    </div>
</template>

<script>
export default {
    name: "Account",
    data: function() {
        return {};
    },
    model: {
        prop: "checked",
        event: "change"
    },
    props: ["checked"],
    methods: {
        message(type, content) {
            this.$Message[type]({
                background: true,
                content,
                duration: 3
            });
        },
        login: async function() {
            try {
                await this.$store.dispatch("logout");
                await this.$store.dispatch("login");
            } catch (err) {
                this.message("error", err.message);
            }
        }
    },
    watch: {},
    computed: {
        address() {
            if (this.account.address == undefined) return "";
            return (
                this.account.address.slice(0, 6) +
                "..." +
                this.account.address.slice(-4, -1)
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
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    /*display: inline-block;*/
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
