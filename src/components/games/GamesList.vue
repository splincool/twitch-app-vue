<template>
  <div class="game-list">
    <atom-spinner
      v-if="loading"
      :animation-duration="1000"
      :size="80"
      :color="'#fff'"
    />
    <div
      v-else
      v-for="item in topGames"
      :key="item.game._id"
      class="game-list--item"
      :class="{'active': activeGame === item.game._id}"
      @click="chooseGame(item.game._id)">
        <img class="game-list--item__cover" :src="item.game.box.medium">
        <div class="game-list--item__title">{{item.game.localized_name}}</div>
    </div>
  </div>
</template>

<script>
import {AtomSpinner} from 'epic-spinners'
export default {
  name: 'StreamingList',
  data () {
    return {
      billboardGame: {},
      loading: true
    }
  },
  created () {
    this.$store.dispatch('getTopGames')
  },
  watch: {
    '$store.state.topGames' (_val) {
      if (_val.length) {
        this.loading = false
      }
    }
  },
  computed: {
    topGames () {
      return this.$store.getters.getTopGames
    },
    activeGame () {
      if (this.$store.getters.getBillboardGame.game) {
        return this.$store.getters.getBillboardGame.game._id
      }
      return ''
    }
  },
  methods: {
    chooseGame (_gameId) {
      this.$store.dispatch('changeBillboardGame', _gameId)
    }
  },
  components: {
    AtomSpinner
  }
}
</script>

<style>
.game-list {
  display: flex;
  justify-content: space-around;
  /* background: linear-gradient(to bottom right, #55398e, #422f67); */
  background: #4d347c;
  padding: 20px;
}
.game-list--item {
  text-align: center;
  cursor: pointer;
}
.game-list--item.active img,
.game-list--item:hover img {
  box-shadow: 0 0px 15px 2px rgba(255, 230, 54, .2), 0 0px 15px 2px rgba(255, 230, 54, .2);
  transition: box-shadow .3s ease-in-out;
}
.game-list--item__title {
  color: #d3cae8;
  max-width: 158px;
}
@media only screen and (max-width: 800px) {
  .game-list--item__cover {
    display: none;
  }
}
@media only screen and (max-width: 670px) {
  .game-list {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .game-list--item__title {
    max-width: 100%;
    padding: 10px;
    font-size: 22px;
  }
}
</style>
