module.exports = {
  siteMetadata: {
      title: 'Full-Stack Bootcamp',
      author: 'Andrew Mead'
  },
  plugins: [
      'gatsby-plugin-sass',
      'gatsby-transformer-json',
      {
          resolve: 'gatsby-source-filesystem',
          options: {
              path: `${__dirname}/content/data`
          }
      },
      {
          resolve: 'gatsby-source-filesystem',
          options: {
              name: 'posts',
              path: `${__dirname}/content/posts`
          }
      },
      {
          resolve: 'gatsby-source-filesystem',
          options: {
              name: 'images',
              path: `${__dirname}/content/images`
          }
      },
      {
          resolve: 'gatsby-plugin-react-svg',
          options: {
              rule: {
                include: /svg/
              }
          }
      },
      'gatsby-transformer-sharp',
      'gatsby-plugin-sharp',
      {
          resolve: 'gatsby-transformer-remark',
          options: {
              plugins: [
                  'gatsby-remark-relative-images',
                  {
                      resolve: 'gatsby-remark-images',
                      options: {
                          maxWidth: 750,
                          linkImagesToOriginal: false
                      }
                  }
              ]
          }
      }
  ]
}