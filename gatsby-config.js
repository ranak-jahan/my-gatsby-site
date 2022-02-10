module.exports = {
    siteMetadata: {
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [

        /*
        * Gatsby's data processing layer begins with “source”
        * plugins. Here the site sources its data from WordPress.
        */
        // highlight-start
    {
        resolve: `gatsby-source-wordpress`,
        options: {
          /*
           * The full URL of the WordPress site's GraphQL API.
           * Example : 'https://www.example-site.com/graphql'
           */
          url: `http://127.0.0.1/wordpress/graphql`,
        },
      },
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,

    ]
}