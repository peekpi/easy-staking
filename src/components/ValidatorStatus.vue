<template>
    <div>
        <Table disabled-hover stripe border :columns="header" :data="bodyStyle">
            <template slot="body">
                <Table disabled-hover :show-header=false stripe border :columns="column" :data="context" />
            </template>
        </Table>
    </div>
</template>
<script>
export default {
    data() {
        return {
            bodyStyle: [{cellClassName: {body: "nopadding"}}]
        };
    },

    computed: {
        header() {
            return [
                {
                    title: "节点状态",
                    align: "center",
                    slot: "body",
                    key: "body"
                }
            ];
        },
        column() {
            return [
                { key: "name" },
                { key: "text" }
            ];
        },
        context() {
            return [
                {
                    name: "出块率",
                    text: this.validator["uptime_percentage"]*100+"%"
                },
                {
                    name: "Slots",
                    text: this.validator["active_nodes"]
                },
                {
                    name: "Elected Slots",
                    text: this.validator["elected_nodes"]
                },
                {
                    name: "七日年化",
                    text: this.validator["apr"]*100+"%"
                },
                {
                    name: "已分红",
                    text: this.validator["lifetime_reward_accumulated"] / 1e18
                }
            ];
        }
    },
    props: ["validator"]
};
</script>
