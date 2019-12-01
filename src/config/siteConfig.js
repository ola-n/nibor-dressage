const siteUrl = process.env.GATSBY_WEB_URL || 'https://www.nibor.se';

module.exports = {
  siteLang: 'sv',
  siteLocale: 'sv_SE',
  siteName: 'Nibor Dressage PRE', // just the name, no tagline
  siteTitle: 'Nibor Dressage PRE', // Site title.
  siteTitleSEO: 'Nibor Dressage PRE', // Alternative site title for SEO.
  siteTagline: 'Din vårdcentral i mobilen', // used in title for home page
  // siteLogo: '/logos/logo-1024.png', // Logo used for SEO and manifest.
  siteUrl, // Domain of your website without pathPrefix.
  siteDescription:
    'Hästar med bästa möjliga blodslinjer framtagna för såväl hållbarhet som gångarter och utstrålning.',
  themeColor: '#FFA62D', // Used for setting manifest and progress theme colors.
  backgroundColor: '#001350', // Used for setting manifest background color.

  og_siteName: 'Nibor Dressage PRE',
  applicationName: 'Nibor Dressage PRE',

  mixpanelSettings: {
    apiToken: process.env.GATSBY_MIXPANEL_TOKEN,
    debug: false, // if true activate debug mode on mixpanel library
    enableOnDevMode: true, // if false mixpanel will be activated on NODE_ENV=production only
  },
};
