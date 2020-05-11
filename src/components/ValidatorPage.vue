<template>
<div>
    <Button @click="modal11 = true">Open a fullscreen modal</Button>
    <Modal v-model="modal11" fullscreen title="Fullscreen Modal">
        <ValidatorProfile :validator="validator" />
        <ValidatorStatus :validator="validator" />
        <ValidatorInfo :validator="validator" />
    </Modal>
</div>
</template>
<script>
import ValidatorInfo from "@/components/ValidatorInfo";
import ValidatorProfile from "@/components/ValidatorProfile";
import ValidatorStatus from "@/components/ValidatorStatus";

export default {
    data() {
        return {
            modal11: false
        };
    },
    props: ["validator"],
    components: {
        ValidatorProfile,
        ValidatorStatus,
        ValidatorInfo
    }
};
</script>
