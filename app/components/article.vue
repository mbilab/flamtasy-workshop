<template lang='pug'>
.article
  .image: img(src='../assets/img/workshop.png')
  .article-title 文章列表
  .line: img(src='../assets/img/blackline.png')
  .list: ul
    //li(src='') Unity3D程式教學
    //li(src='') RE:從0開始的unity工程師之路
    //li(src='') 我要做遊戲 之 企劃入門課
    //li(src='') 網路可以做到什麼?
  .fbicon
    i.fa.fa-facebook-official
    a(href='https://www.facebook.com/NCKUflamtastworkshop/?hc_ref=ARQdMqVJEc11dY8ZxmfBjuTwzyPa93JdCm-rDOGWXksLbT5JKqFQf1pwDVTr3znbHzo' target='_blank')  NCKU遊戲實務工作坊
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
  margin: 0
  padding: 0

.article
  text-align: center
  width: 16.5625vw
  //margin: 2.833vw 0 0 1.719vw

.article-title
  font-size: 1.7893vw

.fbicon
  padding: 2.8646vw 0 0 0

  i.fa.fa-facebook-official
    font-size: 1.5473vw

  a
    color: #000
    display: inline
    font-size: 0.9473vw
    margin: 0
    text-decoration: none

.image
  padding: 0 0 20px 0
  width: 16.5625vw

.line
  padding: 0 0 11px 0

.list
  font-size: 1.1051vw

</style>
