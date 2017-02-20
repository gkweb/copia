let content = {
  props: {
    title: 'COPIA | Heavy metal band from Melbourne, Australia',
    meta: {
      title: 'COPIA official band website | Heavy metal band from Melbourne, Australia',
      description: '',
      keywords: 'copia, heavy metal, band, melbourne band, progressive rock, metalcore, alternative metal, german heavy metal, hard rock, metal band, epic rock, epic metal, australian heavy metal, CopiaNewAlbum ,Chris Blancato Audio ,Will Putney ,PRS ,KSD ,Warwick ,Mayones ,Schecter ,Ibanez ,Guitar ,Bass ,Drums ,ProTools ,DarkGlass ,BKP ,BareKnuckle ,Kemper ,AxeFx ,Orange ,TubeScreamer ,Peavy ,Amplifier ,Djent',
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
        url: '',
        text: 'NEW ALBUM - Epoch',
        btn: [
          {
          text: 'Preorder Physical',
          url: 'http://copia.bigcartel.com/product/epoch-album'
          },
          {
          text: 'Preorder Digital',
          url: 'https://itunes.apple.com/au/album/epoch/id1206217201?ls=1&app=itunes'
          }
        ],
        img: {
          alt: 'Preorder COPIA - Epoch now',
          url: '/content/images/copia-epoch-400x400.jpg'
        }
      },
      bg: '/content/images/bg-image.jpg'
    },
    video: {
      title: 'Video',
      src: 'https://www.youtube.com/embed/wbJIKc3aH2s?rel=0'
    },
    tour: {
      title: 'Tour'
    },
    footer: {
      text: '&copy; Copia 2017. All rights reserved.'
    }
  }
}

module.exports = content
