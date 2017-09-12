<template lang='pug'>
.top
  .image: img(id=logo src='../img/logo.png')
  .menu
    li(v-on:click='panelChange(1)') 課程資訊
    li(v-on:click='panelChange(2)') 關於我們
    li(v-on:click='panelChange(3)')  課程影片
    li(v-on:click='panelChange(4)')  學員作品
    li(v-on:click='panelChange(5)')  聯絡方式
  .line: img(id=bar src='../img/line.png')
</template>

<script>
export default {
  name: 'Top',
  methods: {
    panelChange: function(page){
      this.$emit('panelChange',page)
    },
  }
}
</script>

<style lang='sass' scoped>
img
  width: 100%
li
  font-family: Microsoft JhengHei
  font-weight: bold
  font-size: 1.862vw
  display: inline
  margin: 0
  padding: 0 5.1042vw 0 0
.image
  padding: 0 2.917vw 0 1.5625vw
  width: 11.302vw
  float: left
.line
  clear: left
  height: 1.0417vw
.menu
  padding-top: 9.0104vw
.top
  padding: 0.9375vw 0 1.5625vw 0
#bar
  position: absolute
  bottom: 0
</style>
