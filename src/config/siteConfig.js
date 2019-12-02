const siteUrl = process.env.GATSBY_WEB_URL || 'https://www.nibor.se';

module.exports = {
  siteLang: 'sv',
  siteUrl, // Domain of your website without pathPrefix.
  themeColor: '#FFA62D', // Used for setting manifest and progress theme colors.
  backgroundColor: '#001350', // Used for setting manifest background color.

  applicationName: 'Nibor Dressage PRE',

  mixpanelSettings: {
    apiToken: process.env.GATSBY_MIXPANEL_TOKEN,
    debug: false, // if true activate debug mode on mixpanel library
    enableOnDevMode: true, // if false mixpanel will be activated on NODE_ENV=production only
  },
};
