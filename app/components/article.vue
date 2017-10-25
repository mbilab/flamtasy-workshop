<template lang='pug'>
.article
  .image
    img.slide(src='../res/workshop1.jpg')
    img.slide(src='../res/workshop2.jpg')
  .article-title 課程公告欄
  .line: img(src='../res/blackline.png')
  .course-list: ul(v-html='content')
    //li(src='') Unity3D程式教學
    //li(src='') RE:從0開始的unity工程師之路
    //li(src='') 我要做遊戲 之 企劃入門課
    //li(src='') 網路可以做到什麼?
  .fb-page: iframe(src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FNCKUflamtastworkshop%2F%3Fhc_ref%3DARTFZDs1tTirTUn1tWzwUkUBhNzNSDcX1dl_mBvMnwDvEWQHlMA15TMrjD-N3VXlchs&tabs&width=700&height=154&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=670837969786390" height="154" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true")  
</template>

<script>
var myIndex = 0
export default {
  name: 'Article',
  data(){
    return {
      content: require('../assets/article.html')
    }
  },
  mounted() {
    var carousel = function(){
      var i
      var x = document.getElementsByClassName("slide")
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"
      }
      myIndex++
      if (myIndex > x.length) {myIndex = 1}
      x[myIndex-1].style.display = "block"
      setTimeout(carousel, 5000) // Change image every 2 seconds
    }
    carousel()
  }
}
</script>

<style lang='sass' scoped>
img
  width: 100%

ul
  margin: 0
  padding: 0

.article
  text-align: center
  width: 25.5625vw
  position: relative
  //margin: 2.833vw 0 0 1.719vw

.article-title
  font-size: 1.7893vw

.fb-page
  padding: 3.8646vw 0 0 0
  width: 100%
  position: center

  iframe
    width: 100%
    @media screen and (max-width: 1200px)
      display: none

.image
  padding: 0 0 20px 0
  width: 25.5625vw

.line
  padding: 0 0 11px 0

.slide
  display: none
</style>
<style lang='sass'>
.course-list
  font-size: 1.1051vw

  li
    list-style-type: none
</style>
