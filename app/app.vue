<template lang='pug'>
.app
  .top
    .image: img#logo(@click='toPanel("info")',src='./res/logo.png')
    .menu: ul
      li(@click='toPanel("info")') 課程資訊
      li(@click='toPanel("about")') 關於我們
      li 課程影片
        .list
          .item(@click='toPanel("video2014")') 2014
          .item(@click='toPanel("video2015")') 2015
          .item(@click='toPanel("video2017")') 2017
      li(@click='toPanel("work")') 學員作品
      li(@click='toPanel("contact")') 聯絡方式
    .line: img(src='./res/line.png')
  .main
    div(:class="panel",v-html="panels[panel]")
    v-article.v-article
</template>

<script>
import axios from 'axios'
import Article from './components/article.vue'

export default {

  created() {
    let panels = ['info', 'about', 'work', 'video2014', 'video2015', 'video2017', 'contact']
    for (let v of panels)
      axios.get(v+'.html').then(it => {
        this.$set(this.$data.panels, v, it.data)
      })
  },

  data() {
    return {
      panel: 'info',
      panels: [],
    }
  },

  components: {
    'v-article': Article
  },

  methods: {
    toPanel: function(panel) {
      this.$data.panel = panel
    },
  }
}

</script>

<style lang='sass' scoped>
.app
  background: #fff
  margin: 0 auto
  max-width: 81.5625%
  min-height: 100%
  padding: 0 0 2vw 0

.main
  display: flex

  div
    padding: 0 0 0 4.167vw
    flex: 1 1 50.3646vw

  .v-article
    flex: 0
    margin: 2.0833vw 4.167vw 0 -2vw


.top
  padding: 0.9375vw 0 0 0

  img
    width: 100%

  ul
    margin: 0
    padding: 0
    list-style: none

    li
      border-radius: 5px
      cursor: hand
      float: left
      font-weight: bold
      //font-size: 1.6vw
      font-size: 1.85rem
      margin: 0 5.1042vw 0 0
      padding: 0.262vw

    li:nth-child(3)
      border-bottom-left-radius: 0
      border-bottom-right-radius: 0
      position: relative

      .list
        background: #D1E6D7
        border-top-left-radius: 0
        border-top-right-radius: 0
        border-bottom-left-radius: 5px
        border-bottom-right-radius: 5px
        display: none
        left: 0
        position: absolute
        width: 100%

        .item
          background: #afd6c7
          border-radius: 5px
          margin: .5em auto
          text-align: center
          width: 80%

  ul li:hover .list
    display: block

  ul li:hover
    background: #D1E6D7
    color: #19826D

  .image
    cursor: hand
    float: left
    padding: 0 2.917vw 0 1.5625vw
    width: 11.302vw

  .line
    clear: left
    padding: 1.0417vw 0 1.5625vw 0

  .menu
    padding: 9.0104vw 0 0 0
</style>

<style lang='sass'>

@font-face
//  src: url('./res/font/JhengHei.ttf')

body
  background-color: #A7CFBF
  font-family: Microsoft JhengHei
  margin: 0

.content
  letter-spacing: 1

  .image
    padding: 2vw 0
    text-align: center

    img
      max-width: 80%

    p
      //font-size: 1vw
      font-size: 1rem
      margin: 0
      color: #105447

  ul
    margin: 0
    padding: 0

  li
    list-style-position: inside

    li
      list-style-type: circle
      padding: 0 0 0 2vw

.contact-context
  text-align: center
  //font-size: 1.1894vw
  font-size: 1.3rem
  font-weight: bold
  li
    text-align: left
    padding-left: 2vw
    list-style-type: none
    //font-size: 1.1vw
    font-size: 1.2rem
    font-weight: normal
    line-height: 1.8vw

  img
    width: 100%
    padding: 1.0417vw 0 1.5625vw 0

  .green
    color: #105447

.work-set

  ul
    margin: 0
    padding: 0

    li
      color: #105447
      float: left
      text-align: center
      //font-size: 0.7894vw
      font-size: 1rem
      font-weight: bold
      padding: 0 0 0 2vw
      list-style-type: none

      @media screen and (min-width: 750px)
        min-height: 20vw
        width: 20.3542vw

        img
          max-width: 20.9492vw
          max-height: 13vw

      @media screen and (max-width: 750px)
        min-height: 25vw
        width: 30vw

        img
          max-width: 28.9492vw
          max-height: 20vw

    .work-title
      padding: 0 0 1vw 0
      font-size: 1vw

    .work-image
      width: 100%

.video-set
  ul
    margin: 0
    padding: 0
    position: center

  li
    color: #105447
    float: left
    font-weight: bold
    list-style-type: none
    padding: 0 1.5vw 2vw 1.5vw
    min-height: 25vw
    width: 30vw

    iframe
      width: 40vw
      height: 25vw

  .video-title
    padding: 0 0 0.5vh 0
    //font-size: 1vw
    font-size: 1.2rem

  .video-url
    width: 100%

.title
  //font-size: 2.526vw
  font-size: 2.9rem
  font-weight: bold
  padding: 0 0 0.8854vw 0

.thumb
  padding: 0 0 0.9896vw 0.521vw
  iframe
    margin: 0

.subtitle
  color: #000
  font-weight: bolder
  //font-size: 2.1vw
  font-size: 2.4rem
  margin: 0 0 0.3vw 0

.heading
  font-weight: bold
  //font-size: 1.6vw
  font-size: 1.8rem
  margin: 0 0 0.3vw 0

.subheading
  font-weight: bold
  //font-size: 1.3vw
  font-size: 1.5rem
  margin: 0 0 0 1vw

.context
  font-weight: normal
  //font-size: 1.1vw
  font-size: 1.25rem
  margin: 0 0 0 1vw
  line-height: 1.6

::-webkit-scrollbar
  width: 10px
::-webkit-scrollbar-track
  box-shadow: inset 0 0 6px rgba(0,0,0,0.3)
  border-radius: 10px
::-webkit-scrollbar-thumb
  border-radius: 10px
  box-shadow: inset 0 0 6px rgba(0,0,0,0.5)

</style>

<!--
vi:et
-->
