<template lang='pug'>
.top
  .image: img(v-on:click='panelChange(1)' id=logo src='../assets/img/logo.png')
  .menu: ul
    li(v-on:click='panelChange(1)') 課程資訊
    li(v-on:click='panelChange(2)') 關於我們
    li 課程影片
      .list
        .item(v-on:click='panelChange(3), yearFilter(2014)') 2014
        .item(v-on:click='panelChange(3), yearFilter(2015)') 2015
        .item(v-on:click='panelChange(3), yearFilter(2017)') 2017
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
    yearFilter: function(year){
      this.$emit('yearFilter',year)
    },
  }
}
</script>

<style lang='sass' scoped>
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
    font-size: 1.6vw
    margin: 0 5.1042vw 0 0
    padding: 0.262vw

  li:nth-child(3)
    border-top-left-radius: 5px
    border-top-right-radius: 5px
    position: relative

    .list
      background: #D1E6D7
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

.top
  padding: 0.9375vw 0 0 0

#bar
  bottom: 0
  position: absolute

</style>
