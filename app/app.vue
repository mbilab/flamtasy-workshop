<template lang='pug'>
.app
  v-top(@panelChange='panelChange' @yearFilter='yearFilter')
  .main
    v-info.v-info(v-if='page==1')
    v-about.v-about(v-if='page==2')
    v-video.v-video(v-if='page==3' :year='year')
    v-work.v-work(v-if='page==4')
    v-contact.v-contact(v-if='page==5')
    v-article.v-article
</template>

<script>
import Top from './components/top.vue'
import Info from './components/info.vue'
import About from './components/about.vue'
import Video from './components/video.vue'
import Work from './components/work.vue'
import Contact from './components/contact.vue'
import Article from './components/article.vue'

export default {
  name: 'App',
  data(){
    return {
      page: 1,
      year: '',
    }
  },
  components: {
    'v-top': Top,
    'v-info': Info,
    'v-about': About,
    'v-video': Video,
    'v-work': Work,
    'v-contact': Contact,
    'v-article': Article
  },
  methods: {
    panelChange: function(page){
      this.page=page
    },
    yearFilter: function(year){
      this.year=year
    },
  }
}

</script>

<style lang='sass' scoped>
.app
  background: #fff
  margin: 0 auto
  padding: 0 0 2vw 0
  max-width: 81.5625%
  min-height: 100%
.main
  display: flex
  .v-article
    flex: 0
    margin: 2.0833vw 8.6979vw 0 1.7187vw
  .v-top, .v-info, .v-about, .v-video, .v-work, .v-contact
    padding: 0 0 0 4.167vw
    flex: 1 1 50.3646vw
::-webkit-scrollbar
  width: 0.5em
::-webkit-scrollbar-track
  box-shadow: inset 0 0 6px rgba(0,0,0,0.3)
  border-radius: 10px
::-webkit-scrollbar-thumb
  border-radius: 10px
  box-shadow: inset 0 0 6px rgba(0,0,0,0.5)

</style>
<style lang='sass'>
.title
  font-size: 2.526vw
  font-weight: bold
  padding: 0 0 0.8854vw 0
.thumb
  padding: 0 0 0.9896vw 0.521vw
.content
  font-size: 1.0525vw
  letter-spacing: 1
  @media screen and (min-width: 500px)
    line-height: 4vh
  @media screen and (max-width: 500px)
    line-height: 2.5vw
.subtitle
  color: #105447
  font-weight: bolder
.content
  .image
    padding: 2vw 0
    text-align: center
    img
      max-width: 80%
      max-height: 50vh
    p
      margin: 0
      font-size: 0.8vw
  ul
    margin: 0
    padding: 0
  li
    list-style-position: inside
    li
      padding: 0 0 0 2vw
      list-style-type: circle
</style>
