module.exports = {
    siteMetadata: {
      title: `skfos62.dev blog`,
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
      "gatsby-plugin-image",
      "gatsby-plugin-sharp",
      {
        resolve: "gatsby-source-filesystem",
        options: {
          name: `blog`,
          path: `${__dirname}/blog`,
        }
      },
      "gatsby-plugin-mdx",
      {
        resolve: `gatsby-transformer-remark`,
        options: {
          // Footnotes mode (default: true)
          footnotes: true,
          // GitHub Flavored Markdown mode (default: true)
          gfm: true,
          // Plugins configs
          plugins: [
            {
              resolve: "gatsby-remark-external-links",
              options: {
                target: "_blank",
                rel: "nofollow"
              }
            }
          ],
        },
      },
    ]
}