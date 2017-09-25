module.exports = {
  siteMetadata: {
    title: `Finbar`,
    author: 'Finbar Maunsell'
  },
  plugins: [`gatsby-plugin-react-helmet`, `gatsby-plugin-typography`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      }
    },
    `gatsby-plugin-catch-links`,
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [] // just in case those previously mentioned remark plugins sound cool :)
      }
    }],
}
