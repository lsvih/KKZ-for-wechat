<template>
  <div class="lsvih-minus" :style="style">-</div>
</template>
<script>
export default {
  props: {
    color: {
      type: String,
      default: '#ccc'
    }
  },
  computed: {
    style () {
      return {
        borderColor: this.color,
        color: this.color
      }
    }
  }
}
</script>
<style lang="css">
  .lsvih-minus{
    position:absolute;
    display: inline-block;
    width:18px;
    height:18px;
    margin:8px;
    text-align: center;
    font-weight: bold;
    line-height: 14px;
    border-radius:50%;
    border:2px solid #000;
    color:#000;
  }
</style>
