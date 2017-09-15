<template lang='pug'>
.article
  .image: img(src='../assets/img/workshop.png')
  .article-title 課程公告欄
  .line: img(src='../assets/img/blackline.png')
  .course-list: ul(v-html='content')
    //li(src='') Unity3D程式教學
    //li(src='') RE:從0開始的unity工程師之路
    //li(src='') 我要做遊戲 之 企劃入門課
    //li(src='') 網路可以做到什麼?
  .fbicon: iframe(src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FNCKUflamtastworkshop%2F%3Fhc_ref%3DARRNF20msYUFdco8JO-Y_eVG5Wr6zFYcy0faDerKWvFBvooNTA9ThQNP8DxTy-PjvWw&tabs&width=330&height=154&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=670837969786390" width="300" height="154" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true")
</template>

<script>
export default {
  name: 'Article',
  data(){
    return {
      content: require('../assets/article.html')
    }
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
  width: 16.5625vw
  //margin: 2.833vw 0 0 1.719vw

.article-title
  font-size: 1.7893vw

.fbicon
  padding: 3.8646vw 0 0 0

.image
  padding: 0 0 20px 0
  width: 16.5625vw

.line
  padding: 0 0 11px 0

</style>
<style lang='sass'>
.course-list
  font-size: 1.1051vw

  li
    list-style-type: none
</style>
