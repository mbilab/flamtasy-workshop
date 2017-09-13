<template lang='pug'>
.info
  .title 課程資訊
  .thumb: iframe(src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2FNCKUflamtastworkshop%2F%3Fhc_ref%3DARR9BJa0r9UJvCcwqDpNP2ZuCoTYIBmx7LL2OJoS_lEZH_ofVich_s6sADLfJk2ATXw&width=75&layout=button_count&action=like&size=small&show_faces=false&share=false&height=21&appId=670837969786390" width="77" height="24" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true")
  .content(v-html='content')
</template>

<script>
export default {
  name: 'Info',
  data(){
    return {
      content: require('../assets/info.html')
    }
  },
}
</script>

<style lang='sass' scoped>
</style>
<style lang='sass'>
.content
  font-size: 1.0525vw
  line-height: 15pt
  letter-spacing: 1
.subtitle
  color: #105447
  font-weight: bolder
.content
  .image
    padding: 2vw 0
    text-align: center
    img
      max-width: 80%
      height: 50vh
    p
      margin: 0
      font-size: 0.8vw
  ul
    margin: 0
    padding: 0
  li
    list-style-position: inside
    li
      padding: 0 0 0 2vw
      list-style-type: circle
</style>
