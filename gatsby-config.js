const slugify = require('slugify')
const path = require('path')
module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.dschapman.com',
    title: 'D.S. Chapman',
    seoTitleAddition1: 'Website and Digital Home',
    seoTitleAddition2: 'Articles, Poetry, & Musings',
    twitter: '@ds_chapman',
    description:
      'The website and digital home of writer and poet D.S. Chapman. Explore for articles, poetry, and other projects including my recent book - Seasons of Thought.',
  },
  plugins: [
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-remark-images',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // should this be configurable by the end-user?
              maxWidth: 1380,
              linkImagesToOriginal: false,
            },
          },
          { resolve: `gatsby-remark-copy-linked-files` },
          { resolve: `gatsby-remark-numbered-footnotes` },
          { resolve: `gatsby-remark-smartypants` },
          { resolve: `gatsby-remark-embedder` },
        ],
        remarkPlugins: [require(`remark-slug`)],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: `${__dirname}/content/assets/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: `${__dirname}/content/posts/`,
      },
    },
    'gatsby-plugin-theme-ui',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-87782104-2',
        // Puts tracking script in the head instead of the body
        head: true,
        // Setting this parameter is optional
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'poetry',
        path: `${__dirname}/content/poems/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages/`,
      },
    },
    'gatsby-plugin-sitemap',
    {
      resolve: `gatsby-plugin-breadcrumb`,
      options: {
        defaultCrumb: {
          // location: required and must include the pathname property
          location: {
            pathname: '/notes',
          },
          // crumbLabel: required label for the default crumb
          crumbLabel: 'Notes',
          // all other properties optional
          crumbSeparator: ' / ',
        },
      },
    },
    {
      resolve: '@aengusm/gatsby-theme-brain',
      options: {
        notesDirectory: 'content/notes/',
        rootPath: 'notes',
        rootNote: 'notes',
        mdxOtherwiseConfigured: true,
        noteTemplate: `${__dirname}/src/@aengusm/gatsby-theme-brain/templates/brain`,
        generateSlug: (filename) => {
          const filenameWithExtension = path.parse(filename).name

          return slugify(filenameWithExtension, {
            lower: true,
          })
        },
        hideDoubleBrackets: true,
      },
    },
    'gatsby-plugin-twitter',
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `
        {
          site {
            siteMetadata {
              title
              description
              siteUrl
            }
          }
        }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map((edge) => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.frontmatter.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.frontmatter.slug,
                  custom_elements: [{ 'content:encoded': edge.node.html }],
                })
              })
            },
            query: `
            {
              allMdx(
                sort: {order: DESC, fields: [frontmatter___date]},
              ) {
                edges {
                  node {
                    excerpt
                    html
                    frontmatter {
                      title
                      date
                    }
                  }
                }
              }
            }
            `,
            output: '/rss.xml',
            title: "D.S. Chapman's RSS Feed",
            match: '^/articles/',
          },
        ],
      },
    },
  ],
}
