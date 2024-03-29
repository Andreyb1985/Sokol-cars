const NextI18Next = require('next-i18next').default

module.exports = new NextI18Next({
  otherLanguages: ['en'],
  defaultNS: 'common',
  localeSubpath: {
    eng: 'en'
  },
  localePath: 'public/static/locales',

})