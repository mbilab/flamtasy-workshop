<template lang='pug'>
.video
  .title 課程影片
  .thumb: iframe(src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2FNCKUflamtastworkshop%2F%3Fhc_ref%3DARR9BJa0r9UJvCcwqDpNP2ZuCoTYIBmx7LL2OJoS_lEZH_ofVich_s6sADLfJk2ATXw&width=75&layout=button_count&action=like&size=small&show_faces=false&share=false&height=21&appId=670837969786390" width="77" height="24" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true")
  .video-set: ul
    li(v-for='videoItem in yearFilter')
      .video-title {{videoItem.title}}
      .video-url: iframe(:src="videoItem.url" frameborder="0" allowfullscreen)
</template>

<script>
import VideoItem from '../assets/videoItem.json'
export default {
  name: 'Video',
  props: ['year'],
  data(){
    return {
      videoItems: VideoItem,
    }
  },
  methods: {
    getSrc(name) {
      var images = require.context('../assets/img/', false, /\.png$/)
      return images('./' + name)
    }
  },
  computed: {
    yearFilter: function() {
      var year = this.year
      var videoItems = this.videoItems
      return (this.videoItems).filter(function (videoItem) {
        return videoItem.year === year
      })
    }
  }
}
</script>

<style lang='sass' scoped>
li
  list-style-type: none
ul
  padding: 0
  margin: 0
.video-set li
  float: left
  padding: 0 1.5vw 2vw 1.5vw
  font-size: 0.7894vw
  font-weight: bold
  color: #105447
  @media screen and (min-width: 850px)
    min-height: 15vw
    width: 21.3542vw
    iframe
      width: 21.3542vw
  @media screen and (max-width: 850px)
    min-height: 20vw
    width: 30vw
    iframe
      width: 30.3542vw
.video-title
  padding: 0 0 0.5vh 0
.video-url
  width: 100%
</style>
