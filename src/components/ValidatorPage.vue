<template>
    <Modal footer-hide v-model="enable" fullscreen :title="validator.name">
        <ValidatorProfile :validator="validator" />
        <br />
        <ValidatorStatus :validator="validator" />
        <br />
        <ValidatorInfo :validator="validator" />
    </Modal>
</template>
<script>
import ValidatorInfo from "@/components/ValidatorInfo";
import ValidatorProfile from "@/components/ValidatorProfile";
import ValidatorStatus from "@/components/ValidatorStatus";

export default {
    data() {
        return {
            enable: false
        };
    },
    props: ["triger", "validator"],
    watch: {
        triger() {
            if (!this.enable) this.enable = true;
        }
    },
    components: {
        ValidatorProfile,
        ValidatorStatus,
        ValidatorInfo
    }
};
</script>
