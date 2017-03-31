export default class Tour {
  /**
   * @param {Object} options - Component options
   */
  constructor (options) {
    this.element = options.element
    this.content = this.element.querySelector('.tour-content')
    this.loadingContent = this.element.querySelector('.loading-content')
    this.apiUrl = 'https://rest.bandsintown.com/artists/copia/events?app_id=squarespace-todd-wright-gxya&date=upcoming'
  }

  /**
   * Gets data using fetch API
   */
  getTourData () {
    this.setLoading(true)
    fetch(this.apiUrl, {
      method: 'get'
    }).then((response, d) => {
      response.json().then(data => {
        this.setTourData(data)
      })
    })
    .catch((err) => {
      // Error :(
      this.loadingContent.innerHTML = 'Error loading shows. Please try again later.'
    })
  }

  /**
   * Sets the dom elements with data
   * @param {Object} data - response data
   */
  setTourData (data) {
    let content = ''
    if (typeof data === 'object') {
      for (let i = 0; i < data.length; i++) {
        let item = data[i]
        let delay = (i * 0.25)
        let sDate = new Date(item.datetime)
        // offset to local time
        // http://stackoverflow.com/a/15568516
        let date = new Date(sDate.getTime() + (sDate.getTimezoneOffset() * 60000))
        let day = this.getDay(date.getDay())
        let month = this.getMonth(date.getMonth())
        let dayInMonth = date.getDate()
        let ticketUrl = `<a style='opacity:0'>Tickets</a>`

        // set url
        if (typeof item.offers[0] === 'object') {
          if (item.offers[0].hasOwnProperty('url')) ticketUrl = `<a href="${item.offers[0].url}" target="_blank">Tickets</a>`
        }

        content += `
          <div class="tour-row" style="animation-delay: ${delay}s;">
            <div class="tour-date">
            <div class="date">${dayInMonth} ${month}</div>
            </div>
            <div class="tour-venue">${item.venue.name}</div>
            <div class="tour-location">${item.venue.city}, ${item.venue.country}</div>
            <div class="tour-actions">
            ${ticketUrl}
            <a href="${item.url}" target="_blank">RSVP</a></div>
          </div>`
      }
      this.content.innerHTML = content
      this.setLoading(false)
    }
  }

  /**
   * Gets day of week - maps to string
   * @param {Integer} index -
   * @returns {String} - Day as string
   */
  getDay (index) {
    const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
    return days[index]
  }

  /**
    * Gets month - maps to string
    * @param {Integer} index -
    * @returns {String} - Month as string
    */
  getMonth (index) {
    const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
    return months[index]
  }

  /**
   * Sets the loading state on root element
   * @param {Boolean} isLoading -
   */
  setLoading (isLoading = true) {
    if (isLoading) {
      this.loadingContent.innerHTML = 'loading...'
      this.element.classList.add('loading')
      this.element.classList.remove('loaded')
    } else {
      this.element.classList.remove('loading')
      this.element.classList.add('loaded')
    }
  }

  /**
   * disables the component
   */
  disable () {
    this.element.setAttribute('aria-hidden', 'true')
  }

  /**
   * Enables the component
   */
  enable () {
    this.element.setAttribute('aria-hidden', 'false')
    this.getTourData()
  }
}
