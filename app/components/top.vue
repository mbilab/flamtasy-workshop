<template lang='pug'>
.top
  .image: img(v-on:click='panelChange(1)' id=logo src='../assets/img/logo.png')
  .menu
    li(v-on:click='panelChange(1)') 課程資訊
    li(v-on:click='panelChange(2)') 關於我們
    li(v-on:click='panelChange(3)') 課程影片
    li(v-on:click='panelChange(4)') 學員作品
    li(v-on:click='panelChange(5)') 聯絡方式
  .line: img(id=bar src='../assets/img/line.png')
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
  font-weight: bold
  font-size: 1.6vw
  border-radius: 5px
  display: inline
  padding: 0.262vw
  margin: 0 5.1042vw 0 0
  cursor: hand
li:hover
  background: #D1E6D7
  color: #19826D
.image
  padding: 0 2.917vw 0 1.5625vw
  width: 11.302vw
  float: left
  cursor: hand
.line
  clear: left
  padding: 1.0417vw 0 1.5625vw 0
.menu
  padding: 9.0104vw 0 0 0
.top
  padding: 0.9375vw 0 0 0
#bar
  position: absolute
  bottom: 0
</style>
