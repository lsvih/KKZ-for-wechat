<template>
  <div class="lsvih-mask" :style="style" transition="fade" transition-mode="out-in">
  </div>
</template>
<script>
export default {
  props: {
    rgba: {
      type: String,
      default: 'rgba(0, 0, 0, 0.5)'
    },
    zindex:{
      type: Number,
      default: 99999
    }
  },
  computed: {
    style () {
      return {
        backgroundColor: this.rgba,
        zIndex: this.zindex
      }
    }
  }
}
</script>
<style lang="css">
.lsvih-mask{
  position:fixed;
  top:0;
  left:0;
  height: 100%;
  width: 100%;
}
</style>
