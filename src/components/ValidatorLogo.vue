<template>
    <div>
        <img
            v-if="imgState!='error'"
            :src="imageSrc"
            class="li-validator-image"
            :style="{ display: imgState=='loaded' ? 'block' : 'none' }"
            @load="imgState='loaded'"
            @error="imgState='error'"
        />
        <Avatar v-if="imgState!='loaded'" class="li-validator-image" :address="address" />
    </div>
</template>
<script>
import Avatar from "@/components/common/Avatar";
export default {
  name: 'ValidatorLogo',
  data(){
      return {
          imgState: null
      }
  },
  components: {
    Avatar
  },
  props: ["address", "logoUrl"],
    computed: {
    imageSrc() {
      return (
        this.logoUrl ||
        `https://github.com/harmony-one/validator-logos/raw/master/validators/${this.address}.jpg`
      )
    }
}
};
</script>

<style lang="scss">
.li-validator-image {
    border-radius: 0.25rem;
    height: 30px;
    width: 30px;
    border: 1px solid var(--bc-dim);
    margin: 0px 10px;
}
</style>