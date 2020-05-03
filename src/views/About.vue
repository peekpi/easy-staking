<template>
  <div>
    <Input v-model="value12">
      <Select v-model="select1" slot="append" style="width: 70px">
        <Option value="com">.com</Option>
        <Option value="org">.org</Option>
        <Option value="io">.io</Option>
      </Select>
    </Input>
    <br />
  </div>
</template>
<script>
export default {
  data() {
    return {
      value12: "",
      select1: "com",
    };
  }
};
</script>
