<template lang='pug'>
.article
  .image: img(src='../assets/img/workshop.png')
  .article-title 文章列表
  .line: img(src='../assets/img/blackline.png')
  .list: ul
    li(src='') Unity3D程式教學
    li(src='') RE:從0開始的unity工程師之路
    li(src='') 我要做遊戲 之 企劃入門課
    li(src='') 網路可以做到什麼?
  .fbicon
    i.fa.fa-facebook-official
      |  NCKU遊戲實務工作坊
</template>

<script>
export default {
  name: 'Article',
}
</script>

<style lang='sass' scoped>
img
  width: 100%
li
  list-style-type: none
ul
  padding: 0
  margin: 0
.article
  width: 16.5625vw
  //margin: 2.833vw 0 0 1.719vw
  text-align: center
.article-title
  font-family: Microsoft JhengHei
  font-size: 1.7893vw
  font-weight: normal
.image
  width: 16.5625vw
  padding: 0 0 20px 0
.line
  padding: 0 0 11px 0
.list
  font-family: Microsoft JhengHei
  font-size: 1.1051vw
  font-weight: normal
.fbicon
  padding: 2.8646vw 0 0 0
  font-family: Microsoft JhengHei
  font-size: 0.9473vw
  font-weight: normal
</style>
