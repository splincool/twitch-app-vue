<template>
  <div class="billboard">
    <div v-if="billboardGame"
      class="game-wrapper"
      :style="{backgroundImage: gameCover}">
        <div class="title">{{_billboardGame.game.localized_name}}</div>
        <div class="info-text">
          Channels: {{_billboardGame.channels}} |
          Viewers: {{_billboardGame.viewers}}
        </div>
        <div
          class="streams-btn"
          @click="onShowStreams(_billboardGame.game.name)">
            Show streams
        </div>
    </div>
    <div v-else
      class="default-wrapper">
        <div class="title">Vuetwitch</div>
        <div class="text">Select a game from the list below</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Billboard',
  props: {
    _billboardGame: Object
  },
  computed: {
    gameCover () {
      var imageUrl = this._billboardGame.game.box.template.replace('{width}', 1024).replace('{height}', 1024)
      return 'url(' + imageUrl + ')'
    },
    billboardGame () {
      return Object.keys(this._billboardGame).length !== 0
    }
  },
  methods: {
    onShowStreams (_gameName) {
      this.$router.push({name: 'streams', params: {gameName: _gameName}})
    }
  }
}
</script>

<style>
.billboard {
  background: rgb(30, 29, 29);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 55vh;
}
.billboard .game-wrapper {
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center center;
  background-color: rgba(0, 0, 0, 0.7);
  background-blend-mode: multiply;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.billboard .game-wrapper .title {
  font-size: 36px;
}
.billboard .game-wrapper .info-text {
  color: #d3cae8;
}
.billboard .game-wrapper .streams-btn {
  margin-top: 15px;
  background: #6441a4;
  color: #fff;
  border-radius: 15px;
  border: 0px;
  padding: 6px 20px;
  cursor: pointer;
}
.billboard .game-wrapper .streams-btn:hover {
  background: #7d5bbe;
}
.billboard .default-wrapper {
  text-align: center;
}
.billboard .title {
  font-size: 60px;
  letter-spacing: 8px;
  color: #d3cae8;
  text-align: center;
  text-transform: uppercase;
}
.billboard .text {
  color: #fff;
  font-size: 16px;
}
@media only screen and (max-width: 450px) {
  .billboard .title {
    font-size: 36px;
  }
}
</style>
