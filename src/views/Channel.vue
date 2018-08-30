<template>
  <div class="channel">
    <iframe
      class="iframe-video"
      :src="'https://player.twitch.tv/?channel=' + $route.params.user"
      height="500"
      width="655"
      frameborder="0"
      scrolling="no"
      allowfullscreen="true">
    </iframe>
    <iframe
      class="iframe-chat"
      frameborder="0"
      scrolling="no"
      id="chat_embed"
      :src="'https://www.twitch.tv/embed/' + $route.params.user + '/chat'"
      height="720"
      width="350">
    </iframe>
  </div>
</template>

<script>
export default {
  name: 'Channel'
}
</script>

<style>
.channel {
  display:flex;
  justify-content: space-around;
}
@media only screen and (max-width: 800px) {
  .channel {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .iframe-video,
  .iframe-chat {
    width: 100%;
  }
}
@media only screen and (max-width: 500px) {
  .iframe-video {
    height: auto;
  }
}
</style>
