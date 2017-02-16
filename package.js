const fs = require('fs')
const pug = require('pug')
const content = require('./data/content')

// render and write file
fs.writeFile('./index.html', pug.renderFile('./components/app/index.pug', content), error => {
  if (error) console.log('Error rendering HTML', error)
  else console.log('Rendered HTML')
})
