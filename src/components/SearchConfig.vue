<template>
    <AutoComplete
        size="small"
        icon="ios-search"
        :disabled="loading"
        @on-change="change"
        clearable
        placeholder="节点名、节点地址、高级选项"
    >
        <Option v-for="item in queryHistory" :value="item" :key="item" style="padding-left:1em">{{ item }}</Option>
        <CellGroup>
            <Cell title="排序方式" :disabled="loading" :selected="false">
                <RadioGroup slot="extra" v-model="sortProperty">
                    <Radio label="apr" :disabled="loading">
                        <span>收益率</span>
                    </Radio>
                    <Radio label="total_stake" :disabled="loading">
                        <span>总票数</span>
                    </Radio>
                </RadioGroup>
            </Cell>
            <Cell title="显示候选节点" :disabled="loading" :selected="false">
                <i-switch slot="extra" v-model="active" :disabled="loading" />
            </Cell>
        </CellGroup>
    </AutoComplete>
</template>
<script>
import { debounce } from "lodash";

export default {
    name: "SearchConfig",
    data() {
        return {
            queryHistory:[] // for debug
        };
    },
    model: {
        prop: "loading",
        event: "change"
    },
    props: ["loading"],
    methods: {
        change(search) {
            if(search.length > 256) {
                this.$root.message("warning", "短点！");
                return
            }
            if(search[0]==':'){ // for debug
                let hmy = this.$root.hmy.hmy;
                if(search.length > 42 && hmy.utils.isBech32Address(search.slice(1))){
                    this.$emit("change", true);
                    this.$store.dispatch("login", search.slice(1)).then(()=>this.$emit("change", false));
                    if(this.queryHistory.find(x=>x==search) == undefined)
                        this.queryHistory.push(search);
                }
                return
            }
            this.$store.commit("changeConfig", { search });
            this.refresh();
        },
        refresh: debounce(
            async function() {
                this.$emit("change", true);
                try {
                    this.$store.commit("clearValidators");
                    await this.$store.dispatch("getValidators");
                } catch (e) {
                    console.log("hello")
                    this.$root.message("error", e);
                }
                this.$emit("change", false);
            },
            1000,
            { leading: false }
        )
    },
    computed: {
        sortProperty: {
            get() {
                return this.$store.state.reqConfig.sortProperty;
            },
            set(v) {
                this.$store.commit("changeConfig", { sortProperty: v });
                this.refresh();
            }
        },
        active: {
            get() {
                return !this.$store.state.reqConfig.active;
            },
            set(v) {
                this.$store.commit("changeConfig", { active: !v });
                this.refresh();
            }
        }
    }
};
</script>

<style>
.ivu-select-dropdown {
    opacity: 0.9;
}
</style>