var fs = require('fs')
var file = ''
var output = ''
var info_parse = /<\!DOCTYPE html>\\n<div id='info'>.*?;/
var about_parse = /<\!DOCTYPE html>\\n<div id='about'>.*?;/
var work_parse = /<\!DOCTYPE html>\\n<div id='work'>.*?;/
var article_parse = /<\!DOCTYPE html>\\n<div id='article'>.*?";/
var video_parse = /\[\{.*?\}\]/

fs.readFile('main.js', (err, main) => {
  file = main.toString()
  fs.readFile('./assets/info.html', (err, info) => {
    output = file.replace(info_parse, info.toString().replace(/\n/g, '') + '";')
    fs.readFile('./assets/about.html', (err, about) => {
      output = output.replace(about_parse, about.toString().replace(/\n/g, '') + '";')
      fs.readFile('./assets/work.html', (err, work) => {
        output = output.replace(work_parse, work.toString().replace(/\n/g, '') + '";')
        fs.readFile('./assets/article.html', (err, article) => {
          output = output.replace(article_parse, article.toString().replace(/\n/g, '') + '";')
          fs.readFile('./assets/videoItem.json', (err, video) => {
            output = output.replace(video_parse, video.toString().replace(/\n/g, ''))
            fs.writeFileSync('main.js', output)
          })
        })
      })
    })
  })
})


