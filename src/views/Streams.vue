<template>
  <div class="streams">
    <div class="loading-wrapper"
      v-if="loading">
      <atom-spinner
        :animation-duration="1000"
        :size="80"
        :color="'#fff'"
      />
    </div>
    <div v-else
      class="streams-wrapper">
      <div v-for="stream in gameStreams"
        :key="stream._id"
        @click="onStreamClick(stream)"
        class="stream-item">
        <img class="stream-item--cover" :src="stream.preview.medium">
        <div class="stream-item--title">
          {{stream.channel.status}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {AtomSpinner} from 'epic-spinners'
export default {
  name: 'Streams',
  data () {
    return {
      loading: true
    }
  },
  created () {
    this.$store.dispatch('getStreams', this.$route.params.gameName)
  },
  watch: {
    '$store.state.gameStreams' (_val) {
      if (_val.length) {
        this.loading = false
      }
    }
  },
  computed: {
    gameStreams () {
      return this.$store.getters.getStreams
    }
  },
  methods: {
    onStreamClick (_stream) {
      this.$router.push({name: 'channel', params: {user: _stream.channel.name}})
    }
  },
  components: {
    AtomSpinner
  }
}
</script>

<style>
.streams {
  display: flex;
  color: #fff;
  padding: 10px;
}
.loading-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.streams-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.stream-item {
  cursor: pointer;
  max-width: 320px;
  margin-bottom: 10px;
  color: #d3cae8;
}
.stream-item:hover {
  box-shadow: 0 0px 15px 2px rgba(255, 230, 54, .2), 0 0px 15px 2px rgba(255, 230, 54, .2);
  transition: box-shadow .3s ease-in-out;
}
.stream-item--title {
  padding: 5px;
}
@media only screen and (max-width: 800px) {
  .stream-item {
    text-align: center;
  }
  .stream-item--cover {
    width: 95%;
  }
}
</style>
