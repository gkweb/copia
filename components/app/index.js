import 'dom4'
import 'svgxuse'
import domready from 'domready'
import Hurdler from 'hurdler'
import Home from '../home'
import Tour from '../tour'

const hurdler = new Hurdler()

domready(() => {
  let home = new Home({element: document.querySelector('[data-component=home]')})
  let tour = new Tour({element: document.querySelector('[data-component=tour]')})
  hurdler.addHurdle({
    test: element => {
      return element.id === 'home'
    },
    onJump: element => {
      tour.disable()
      home.enable()
    }
  })
  hurdler.addHurdle({
    test: element => {
      return element.id === 'tour'
    },
    onJump: element => {
      home.disable()
      tour.enable()
    }
  })
  hurdler.sprint()
  if (!hurdler.target) hurdler.setTarget(home.element)
})
