<template lang='pug'>
.contact
  .title 聯絡方式
  .thumb: iframe(src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2FNCKUflamtastworkshop%2F%3Fhc_ref%3DARR9BJa0r9UJvCcwqDpNP2ZuCoTYIBmx7LL2OJoS_lEZH_ofVich_s6sADLfJk2ATXw&width=75&layout=button_count&action=like&size=small&show_faces=false&share=false&height=21&appId=670837969786390" width="77" height="24" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true")
  .contact-context
    | #[.green Please Feel Free to contact us#[br]我們的目標與服務範圍有：]
    | #[img(src='../assets/img/line.png')]
    | #[li ( 1 ) 廣義獨立遊戲、電玩動漫與遊戲行銷課程設計與相關產業之調查與研究]
    | #[li ( 2 ) RPG遊戲、解謎遊戲、手機遊戲與桌游之產品開發，製作與相關書籍、論文之出版]
    | #[li ( 3 ) 產品遊戲化(Gamification)之設計與行銷]
    | #[li ( 4 ) 獨立遊戲出版、代理、翻譯、策展與相關業務]
    | #[img(src='../assets/img/line.png')]
    | #[.green 請使用下列方式與我們取得聯繫，非常感謝。#[br]Mail | flamtasyworkshop@gmail#[br]Facebook | https://www.facebook.com/NCKUflamtastworkshop/]
</template>

<script>
export default {
  name: 'Contact',
}
</script>

<style lang='sass' scoped>
img
  width: 100%
  padding: 1.0417vw 0 1.5625vw 0
.contact-context
  text-align: center
  font-size: 1.1894vw
  font-weight: bold
  li
    text-align: left
    padding-left: 2vw
  .green
    color: #105447
</style>
