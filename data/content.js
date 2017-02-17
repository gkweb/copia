let content = {
  props: {
    title: 'COPIA | Heavy metal band from Melbourne, Australia',
    meta: {
      title: 'COPIA official band website | Heavy metal band from Melbourne, Australia',
      description: '',
      keywords: 'heavy metal, band, melbourne band, german heavy metal, hard rock, metal band, epic rock, epic metal, australian heavy metal',
      image: 'http://copiaband.com/content/images/copia-og-img.jpg',
      siteUrl: 'http://copiaband.com/'
    },
    externalLinks: [
      {
        attributes: {
          href: 'https://fonts.googleapis.com/css?family=Open+Sans|Sumana',
          rel: 'stylesheet'
        }
      }
    ],
    navigation: {
      links: [
        {
          text: 'Home',
          url: '/#/home',
          attributes: false
        },
        {
          text: 'Tour',
          url: '#/tour',
          attributes: false
        },
        {
          text: 'Shop',
          url: 'http://www.copia.bigcartel.com/',
          attributes: {
            target: '_blank'
          }
        }
      ]
    },
    social: {
      links: [
        {
          text: 'Facebook',
          url: 'https://www.facebook.com/copiaband/',
          attributes: {
            target: '_blank'
          },
          icon: {
            url: '/content/symbols.svg#facebook-icon'
          }
        },
        {
          text: 'Youtube',
          url: 'https://www.youtube.com/user/copiaband',
          attributes: {
            target: '_blank'
          },
          icon: {
            url: '/content/symbols.svg#youtube-icon'
          }
        }
      ]
    },
    home: {
      title: 'COPIA - Heavy metal band from Melbourne, Australia',
      logo: {
        url: '/content/symbols.svg#icon-logo'
      },
      featuredAlbum: {
        img: {
          alt: 'Preorder COPIA - Epoch now',
          url: '/content/images/copia-epoch-400x400.jpg'
        }
      },
      bg: '/content/images/bg-image.jpg'
    },
    tour: {
      title: 'Tour'
    }
  }
}

module.exports = content
