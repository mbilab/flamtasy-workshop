<template lang='pug'>
.work
  .title 學員作品
  .thumb: iframe(src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2FNCKUflamtastworkshop%2F%3Fhc_ref%3DARR9BJa0r9UJvCcwqDpNP2ZuCoTYIBmx7LL2OJoS_lEZH_ofVich_s6sADLfJk2ATXw&width=75&layout=button_count&action=like&size=small&show_faces=false&share=false&height=21&appId=670837969786390" width="77" height="24" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true")
  .work-set: ul
    li(v-for='workItem in workItems')
      .work-title {{workItem.workname}} 作者：{{workItem.workauth}}
      .work-image: img(:src="getSrc(workItem.workimage)")
</template>

<script>
import WorkItem from '../assets/workItem.json'
export default {
  name: 'Work',
  data(){
    return {
      workItems: WorkItem
    }
  },
  methods: {
    getSrc(name) {
      var images = require.context('../assets/img/', false, /\.png$/)
      return images('./' + name)
    }
  }
}
</script>

<style lang='sass' scoped>
li
  list-style-type: none

ul
  margin: 0
  padding: 0

.work-set li
  color: #105447
  float: left
  text-align: center
  font-size: 0.7894vw
  font-weight: bold
  padding: 0 1.5vw

  @media screen and (min-width: 750px)
    min-height: 20vw
    width: 21.3542vw

    img
      max-width: 11.9492vw
      max-height: 12vw

  @media screen and (max-width: 750px)
    min-height: 25vw
    width: 30vw

    img
      max-width: 11.9492vw
      max-height: 25vw

.work-title
  padding: 0 0 2vh 0

.work-image
  width: 100%

  img
    opacity: 0.5
</style>
