export default class Loading {
  /**
   * @param {Object} options - Component options
   */
  constructor (options) {
    this.element = options.element
    if (!this.element) return
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
