module.exports = {
    siteMetadata: {
        title: 'Full-Stack Bootcamp',
        author: 'Andrew Mead'
    },
    plugins: [
        'gatsby-plugin-sass',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'posts',
                path: `${__dirname}/content`
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
