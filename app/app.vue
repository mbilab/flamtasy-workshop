<template lang='pug'>
.app
  v-top(@panelChange='panelChange')
  .main
    v-info.v-info(v-if='page==1')
    v-about.v-about(v-if='page==2')
    v-video.v-video(v-if='page==3')
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
  }
}

</script>

<style lang='sass'>
.app
  background: #fff
  margin: 0 auto
  max-width: 81.5625%
.main
  display: flex
  .v-article
    flex: 0
    margin: 0 167px 0 0
  .v-top, .v-info, .v-about, .v-video, .v-work, .v-contact
    padding: 0 0 0 4.167vw
    flex: 1 1 50.3646vw
.title
  font-family: Microsoft JhengHei
  font-size: 2.526vw
  font-weight: bold
  padding: 0 0 0.8854vw 0
.thumb
  padding: 0 0 0.9896vw 0.521vw
.context
  font-family: Microsoft JhengHei
  font-size: 1.0525vw
  font-weight: normal
.context
  line-height: 30pt
  letter-spacing: 1
li
  list-style-type: none
::-webkit-scrollbar
  width: 0.5em
::-webkit-scrollbar-track
  box-shadow: inset 0 0 6px rgba(0,0,0,0.3)
  border-radius: 10px
::-webkit-scrollbar-thumb
  border-radius: 10px
  box-shadow: inset 0 0 6px rgba(0,0,0,0.5)

</style>
