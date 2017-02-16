import 'dom4'
import 'svgxuse'
import domready from 'domready'
import Home from '../home'

domready(() => {
  let home = new Home({element: document.querySelector('[data-component=home]')})
})
