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
                    title: this.validator.name,
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
                    name: "总得票数",
                    text: this.validator["total_stake"] / 1e18
                },
                {
                    name: "自抵押票数",
                    text: this.validator["self_stake"] / 1e18
                },
                {
                    name: "代理抵押票数",
                    text: this.validator["delegator_shares"] / 1e18
                },
                {
                    name: "最大可代理票数",
                    text: this.validator["max_total_delegation"] / 1e18
                }
            ];
        }
    },
    props: ["validator"]
};
</script>

<style>
.nopadding>.ivu-table-cell {
    padding: 0px;
}
</style>
