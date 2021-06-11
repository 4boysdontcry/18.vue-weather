<template>
  <div class="daily-wrapper">
    DAILY
  </div>
</template>

<script>
export default {
  name: 'Daily',
  created(){
    this.$store.dispatch('ACT_COORDS', null)
  }
}
</script>

<style lang="scss" scoped>
.daily-wrapper {
  font-size: 10vh;
}
</style>