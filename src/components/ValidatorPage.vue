<template>
    <Modal footer-hide v-model="enable" fullscreen :title="validator.name">
        <Spin v-if="loading" size="large" fix />
        <div v-else>
            <ValidatorProfile :validator="detail" />
            <br />
            <ValidatorStatus :validator="detail" />
            <br />
            <ValidatorInfo :validator="detail" />
        </div>
    </Modal>
</template>
<script>
import ValidatorInfo from "@/components/ValidatorInfo";
import ValidatorProfile from "@/components/ValidatorProfile";
import ValidatorStatus from "@/components/ValidatorStatus";

export default {
    data() {
        return {
            enable: false,
            loading: true,
            detail: null,
        };
    },
    props: ["triger", "validator"],
    watch: {
        triger() {
            if (!this.enable){
                this.loading = true;
                this.enable = true;
                this.$store.dispatch("getValidator", this.validator.address).then(
                    validator=>{
                        this.detail = validator;
                        this.loading = false;
                    }
                );
            }
        }
    },
    components: {
        ValidatorProfile,
        ValidatorStatus,
        ValidatorInfo
    }
};
</script>
