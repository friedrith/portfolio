module.exports = {
  siteMetadata: {
    title: 'Thibault Friedrich',
    description:
      '🚀 Ux Designer and Frontend developer specialized in clean and smooth user experiences 👌. I am also very interested 🔎 in futuristic technologies and sociology.',
    author: 'Thibault Friedrich <thibault.friedrich@gmail.com>',
    siteUrl: `https://thibaultfriedrich.io`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        // Override the file regex for SASS
        sassRuleTest: /\.style.global\.s(a|c)ss$/,
        // Override the file regex for CSS modules
        sassRuleModulesTest: /\.style\.s(a|c)ss$/,
      },
    },
    'gatsby-plugin-resolve-src',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.svg$/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [process.env.GTAG_TRACKING_ID],
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ['/preview/**', '/do-not-track/me/too/'],
        },
      },
    },
    {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        includeInDevelopment: false, // optional parameter to include script in development
        id: process.env.HOTJAR_ID,
        sv: 6,
      },
    },
    {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        id: 624448,
        sv: 6,
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-postcss`,
  ],
}
