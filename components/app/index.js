import 'dom4'
import 'svgxuse'
import domready from 'domready'
import Hurdler from 'hurdler'
import Loading from '../loading'
import Home from '../home'
import Hero from '../hero'
import Navigation from '../navigation_v2'
import Sms from '../sms'
import Tour from '../tour'
import Video from '../video'

const hurdler = new Hurdler()

window.addEventListener('load', () => {
// domready(() => {
  let loading = new Loading({element: document.querySelector('[data-component="loading"]')})
  let home = new Home({element: document.querySelector('[data-component="home"]')})
  let sms = new Sms({element: document.querySelector('[data-component="sms"]')})
  let tour = new Tour({element: document.querySelector('[data-component="tour"]')})
  let video = new Video({element: document.querySelector('[data-component="video"]')})
  let hero = new Hero({element: document.querySelector('[data-component="hero"]')})
  let nav = new Navigation({element: document.querySelector('[data-component="navigation_v2"]')})
  nav.enable() // Always enable navigation

  hurdler.addHurdle({
    test: element => {
      return element.id === 'home'
    },
    onJump: element => {
      ga('send', 'pageview', {'page': location.pathname + location.search  + location.hash})
      loading.disable()
      tour.disable()
      home.enable()
      sms.enable()
      video.enable()
      hero.enable()
    }
  })
  hurdler.addHurdle({
    test: element => {
      return element.id === 'tour'
    },
    onJump: element => {
      ga('send', 'pageview', {'page': location.pathname + location.search  + location.hash})
      loading.disable()
      home.disable()
      sms.disable()
      video.disable()
      tour.enable()
      hero.disable()
    }
  })
  hurdler.sprint()
  if (!hurdler.target) hurdler.setTarget(home.element)
})
