<template>
    <Table disabled-hover stripe border :columns="header" :data="bodyStyle">
        <template slot="body">
            <Table disabled-hover :show-header=false stripe border :columns="column" :data="context" />
        </template>
    </Table>
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
                    title: "节点信息",
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
            return [
                {
                    name: "简介",
                    text: this.validator["details"]
                },
                {
                    name: "网站",
                    text: this.validator["website"]
                },
                {
                    name: "投票地址",
                    text: this.validator["operator_address"]
                },
                {
                    name: "注册区块高度",
                    text: this.validator["creation_height"]
                },
                {
                    name: "费率",
                    text: this.validator["rate"]*100+"%"
                },
                {
                    name: "单日最大费率调整",
                    text: this.validator["max_change_rate"]*100+"%"
                }
            ];
        }
    },
    props: ["validator"]
};
</script>
