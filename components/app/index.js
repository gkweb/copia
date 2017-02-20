import 'dom4'
import 'svgxuse'
import domready from 'domready'
import Hurdler from 'hurdler'
import Home from '../home'
import Tour from '../tour'
import Video from '../video'

const hurdler = new Hurdler()

domready(() => {
  let home = new Home({element: document.querySelector('[data-component=home]')})
  let tour = new Tour({element: document.querySelector('[data-component=tour]')})
  let video = new Video({element: document.querySelector('[data-component=video]')})
  hurdler.addHurdle({
    test: element => {
      return element.id === 'home'
    },
    onJump: element => {
      ga('send', 'pageview', {'page': location.pathname + location.search  + location.hash})
      tour.disable()
      home.enable()
      video.enable()
    }
  })
  hurdler.addHurdle({
    test: element => {
      return element.id === 'tour'
    },
    onJump: element => {
      ga('send', 'pageview', {'page': location.pathname + location.search  + location.hash})
      home.disable()
      video.disable()
      tour.enable()
    }
  })
  hurdler.sprint()
  if (!hurdler.target) hurdler.setTarget(home.element)
})
