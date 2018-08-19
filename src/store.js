import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    topGames: [],
    billboardGame: {},
    gameStreams: []
  },
  mutations: {
    setGames (state, games) {
      state.topGames = games
    },
    clearGames (state) {
      state.topGames = []
    },
    setBillboardGame (state, gameId) {
      state.billboardGame = state.topGames.find(item => item.game._id === gameId)
    },
    clearBillboardGame (state) {
      state.billboardGame = {}
    },
    setStreams (state, streams) {
      state.gameStreams = streams
    },
    clearStreams (state) {
      state.gameStreams = []
    }
  },
  getters: {
    getTopGames: state => {
      return state.topGames
    },
    getBillboardGame: state => {
      return state.billboardGame
    },
    getStreams: state => {
      return state.gameStreams
    }
  },
  actions: {
    getTopGames ({commit}) {
      commit('clearGames')
      Vue.http.get('https://api.twitch.tv/kraken/games/top?limit=5',
        {headers: {'Client-ID': '49do556r7tgabkc36k5cebv00oqizp'}}).then(response => {
        commit('setGames', response.body.top)
      }, response => {
        // error callback
        console.log('ERROR', response)
      })
    },
    changeBillboardGame ({commit}, gameId) {
      commit('setBillboardGame', gameId)
    },
    clearBillboardGame ({commit}) {
      commit('clearBillboardGame')
    },
    getStreams ({commit}, gameName) {
      commit('clearStreams')
      Vue.http.get('https://api.twitch.tv/kraken/streams/?stream_type=live&game=' + gameName,
        {headers: {'Client-ID': '49do556r7tgabkc36k5cebv00oqizp'}}).then(response => {
        commit('setStreams', response.body.streams)
      }, response => {
        // error callback
        console.log('ERROR', response)
      })
    }
  }
})
