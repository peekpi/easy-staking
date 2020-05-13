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
import { percent } from "../js/num";
let url = web => (web.slice(0, 4) == "http" ? web : "http://" + web);

export default {
    data() {
        return {
            bodyStyle: [{ cellClassName: { body: "nopadding" } }]
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
                {
                    key: "text",
                    render(h, params) {
                        let row = params.row;
                        if (row.name == "网站")
                            return h(
                                "a",
                                {
                                    domProps: {
                                        href: url(row.text?row.text:""),
                                        target: "black"
                                    }
                                },
                                row.text
                            );
                        return h("span", row.text);
                        //console.log(params.row);
                    }
                }
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
                    text: percent(this.validator["rate"])
                },
                {
                    name: "单日最大费率调整",
                    text: percent(this.validator["max_change_rate"])
                }
            ];
        }
    },
    props: ["validator"]
};
</script>
