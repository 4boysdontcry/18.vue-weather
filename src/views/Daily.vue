<template>
  <div class="daily-wrapper">
    DAILY
    <p class="">{{}}</p>
    <p class="">{{}}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Daily',
  data() {
    return {
      // GET_COORDS: mapGetters(['GET_COORDS'])
    }
  },
  computed: {   // 변한 값을 받아서 mapGetters로 펼침
    // getLat: function (){
    // (this.$store.state.coords) ? this.$store.state.coords.lat : ''
    // },
    
  },
  created(){
    console.log(GET_COORDS)
    this.$store.dispatch('ACT_COORDS', null)
  }
}
</script>

<style lang="scss" scoped>
.daily-wrapper {
  font-size: 10vh;
}
</style>