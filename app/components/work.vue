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
  padding: 0
  margin: 0
.work-set li
  float: left
  text-align: center
  padding: 0 1.5vw
  font-size: 0.7894vw
  font-weight: bold
  color: #105447
  @media screen and (min-width: 750px)
    min-height: 20vw
    width: 21.3542vw
  @media screen and (max-width: 750px)
    min-height: 25vw
    width: 30vw
.work-title
  padding: 0 0 2vh 0
.work-image
  width: 100%
  img
    width: 11.9492vw
    opacity: 0.5

</style>
