<template>
    <AutoComplete
        size="small"
        icon="ios-search"
        :disabled="loading"
        @on-change="change"
        search
        clearable
        placeholder="节点名、节点地址、高级选项"
    >
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
        return {};
    },
    model: {
        prop: "loading",
        event: "change"
    },
    props: ["loading"],
    methods: {
        change(search) {
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