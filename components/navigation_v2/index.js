export default class Navigation {
  /**
   * @param {Object} options - Component options
   */
  constructor (options) {
    this.element = options.element
    if (!this.element) return
    this.element.dataset.loaded = 'true'

    this.menuElement = document.getElementById('menu')
    this.mainMenu = document.getElementById('menu_main')
    this.menuOverlay = document.getElementById('menu-overlay')

    this.handleMenuClick = this.handleMenuClick.bind(this)
    this.handleMenuItemClick = this.handleMenuItemClick.bind(this)

    this.menuElementItems = this.mainMenu.querySelectorAll('ul > li > a')

    for (let m = 0; m < this.menuElementItems.length; m++) {
      this.menuElementItems[m].addEventListener('click', this.handleMenuItemClick)
    }

    this.menuElement.addEventListener('click', this.handleMenuClick)
  }

  /**
   * Handles the menu click / toggle
   * @param {MouseEvent} event - Mouse event
   */
  handleMenuClick (event) {
    let menu = event.currentTarget
    let target = document.getElementById(event.currentTarget.getAttribute('aria-controls'))
    target.hidden = !target.hidden

    menu.setAttribute('aria-expanded', !target.hidden)
  }

  /**
   *
   * @param {Boolean} visible - hidden / visible
   */
  toggleMenu (visible) {
    let isVisible = false

    if (typeof visible === 'boolean') {
      isVisible = visible
    } else {
      isVisible = !this.menuOverlay.hidden
    }

    this.menuOverlay.hidden = !isVisible

    this.menuElement.setAttribute('aria-expanded', !this.menuOverlay.hidden)
  }

  /**
   * Handles the menu click / toggle
   * @param {MouseEvent} event - Mouse event
   */
  handleMenuItemClick () {
    // this.mainMenu.setAttribute('aria-expanded', false)
    this.toggleMenu(false)
  }

  /**
   * disables the component
   */
  disable () {
    this.element.setAttribute('aria-hidden', 'true')
    this.element.classList.remove('enable')
  }

  /**
   * Enables the component
   */
  enable () {
    this.element.setAttribute('aria-hidden', 'false')
    this.element.classList.add('enable')
  }
}
