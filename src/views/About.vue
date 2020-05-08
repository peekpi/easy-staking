<template>
    <ValidatorList />
</template>
<script>
import ValidatorList from "@/components/ValidatorList";

export default {
  name: "AboutHome",
  components: {
    ValidatorList
  },
  data() {
    window.about=this;
    return {};
  },
  methods: {
  }
};
</script>

