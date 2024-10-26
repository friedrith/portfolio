module.exports = {
  siteMetadata: {
    defaultTitle: 'Thibault Friedrich',
    titleTemplate: '%s - Frontend Freelance',
    defaultDescription:
      '🚀 Ux Designer and Frontend developer specialized in clean and smooth user experiences 👌. I am also very interested 🔎 in futuristic technologies and sociology.',
    author: 'Thibault Friedrich <thibault.friedrich@gmail.com>',
    defaultImage: '/preview.png',
    siteUrl: `https://thibaultfriedrich.io`,
    keywords: ['frontend', 'react', 'design', 'freelance'],
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-105183271-1',
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    // 'gatsby-plugin-mdx',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/assets/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
  ],
}
