module.exports = {
  siteMetadata: {
    title: 'Nibor Dressage PRE',
    description:
      'Hästar med bästa möjliga blodslinjer framtagna för såväl hållbarhet som gångarter och utstrålning.',
    author: 'mika@nibor.se',
    siteLang: 'sv',
    siteLocale: 'sv_SE',
    siteName: `Nibor Dressage PRE`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog-entries',
        path: `${__dirname}/src/blog-entries`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },

    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ['develop'],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-flow',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Nibor Dressage PRE',
        short_name: 'Nibor',
        start_url: '/',
        background_color: '#001350',
        theme_color: '#FFA62D',
        display: 'browser', // test different values here and see what it looks like on a mobile device
        icon: 'src/images/logo/yellow-logo-no-text.svg', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
              linkImagesToOriginal: true,
            },
          },
        ],
      },
    },
    `gatsby-plugin-emotion`,
    `gatsby-plugin-netlify`,
    {
      resolve: 'gatsby-remark-copy-linked-files',
      options: {
        // 'ignoreFileExtensions' defaults to ['png', 'jpg', 'jpeg', 'bmp', 'tiff']
        // as we assume you'll use gatsby-remark-images to handle
        // images in markdown as it automatically creates responsive
        // versions of images.
        //
        // If you'd like to not use gatsby-remark-images and just copy your
        // original images to the public directory, set
        // 'ignoreFileExtensions' to an empty array.
        destinationDir: 'assets',
        ignoreFileExtensions: ['png', 'jpg', 'jpeg'],
      },
    },
    {
      resolve: 'gatsby-plugin-mixpanel',
      options: {
        apiToken: 'bd878f39aa31b4e079ddfbc2861460bd',
        enableOnDevMode: false, // if false mixpanel will be activated on NODE_ENV=production only
        mixpanelConfig: null, // override specific config for mixpanel initialization https://github.com/mixpanel/mixpanel-js/blob/8b2e1f7b/src/mixpanel-core.js#L87-L110
      },
    },
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          '@src': 'src',
          '@components': 'src/components',
          '@images': 'src/images',
          '@pages': 'src/pages',
          '@spec': 'src/specification',
          '@state': 'src/state',
        },
        extensions: ['js'],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-154895558-1',
      },
    },
  ],
};
