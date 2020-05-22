<template>
    <Table disabled-hover stripe border :columns="header" :data="bodyStyle">
        <template slot="body">
            <Table disabled-hover :show-header=false stripe border :columns="column" :data="context" />
        </template>
    </Table>
</template>
<script>
import { ones, zeroDecimals, percent } from "../js/num"

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
                    key: "body",
                    flush: this.validator.name // "iview's bug?"
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
            let deal = v=>zeroDecimals(ones(v))
            return [
                {
                    name: "出块率",
                    text: percent(this.validator["uptime_percentage"])
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
                    name: "年化",
                    text: percent(this.validator["apr"])
                },
                {
                    name: "已分红",
                    text: deal(this.validator["lifetime_reward_accumulated"])
                }
            ];
        }
    },
    props: ["validator"]
};
</script>
