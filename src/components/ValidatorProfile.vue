<template>
    <Table disabled-hover stripe border :columns="header" :data="bodyStyle">
        <template slot="body">
            <Table
                disabled-hover
                :show-header="false"
                stripe
                border
                :columns="column"
                :data="context"
            />
        </template>
    </Table>
</template>
<script>
import { ones, zeroDecimals } from "../js/num";
import BigNumber from "bignumber.js";

export default {
    data() {
        return {
            bodyStyle: [{ cellClassName: { body: "nopadding" } }]
        };
    },
    computed: {
        delegatedStake() {
            return BigNumber(this.validator.total_stake)
                .minus(this.validator.self_stake)
                .toNumber();
        },
        header() {
            return [
                {
                    title: this.validator.name,
                    align: "center",
                    slot: "body",
                    key: "body",
                    flush: this.validator.name // "iview's bug?"
                }
            ];
        },
        column() {
            return [{ key: "name" }, { key: "text" }];
        },
        context() {
            let deal = v => zeroDecimals(ones(v));
            return [
                {
                    name: "总得票数",
                    text: deal(this.validator["total_stake"])
                },
                {
                    name: "自抵押票数",
                    text: deal(this.validator["self_stake"])
                },
                {
                    name: "代理抵押票数",
                    text: deal(this.delegatedStake)
                },
                {
                    name: "最大可代理票数",
                    text: deal(this.validator["max_total_delegation"])
                }
            ];
        }
    },
    props: ["validator"]
};
</script>

<style>
.nopadding > .ivu-table-cell {
    padding: 0px;
}
</style>
