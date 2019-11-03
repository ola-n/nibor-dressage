module.exports = {
  siteMetadata: {
    title: 'Nibor Dressage PRE',
    description: 'Hem för Nibor Dressafe PRE',
    author: '@ola',
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
    `gatsby-plugin-emotion`,
    `gatsby-plugin-netlify`,
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
  ],
};
