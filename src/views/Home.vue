<template>
  <div class="home">
    <Billboard
      :_billboardGame="billboardGame"/>
    <GamesList/>
  </div>
</template>

<script>
// @ is an alias to /src
import Billboard from '@/components/Billboard.vue'
import GamesList from '@/components/games/GamesList.vue'

export default {
  name: 'home',
  created () {
    this.$store.dispatch('clearBillboardGame')
  },
  computed: {
    billboardGame () {
      return this.$store.getters.getBillboardGame
    }
  },
  components: {
    Billboard,
    GamesList
  }
}
</script>
