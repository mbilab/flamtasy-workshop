<template lang='pug'>
.work
  .title 學員作品
  .thumb: iframe(src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2FNCKUflamtastworkshop%2F%3Fhc_ref%3DARR9BJa0r9UJvCcwqDpNP2ZuCoTYIBmx7LL2OJoS_lEZH_ofVich_s6sADLfJk2ATXw&width=75&layout=button_count&action=like&size=small&show_faces=false&share=false&height=21&appId=670837969786390" width="77" height="24" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true")
  .work-set(v-html='content')
</template>

<script>
export default {
  name: 'Work',
  data(){
    return {
      content: require('../assets/work.html')
    }
  },
}
</script>

<style lang='sass'>
.work-set

  ul
    margin: 0
    padding: 0

    li
      color: #105447
      float: left
      text-align: center
      font-size: 0.7894vw
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

</style>
