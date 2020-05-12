<template>
<div>
  <Button type="primary"></Button>
    <i-switch/>
    <i-circle/>

</div>
</template>
<script>
    export default {
        data () {
            return {
                switch1: false
            }  
        },
        methods: {
            change (status) {
                this.$Message.info('开关状态：' + status);
            }
        }
    }
</script>
