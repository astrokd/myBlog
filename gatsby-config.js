module.exports = {
  siteMetadata: {
    title: "My GatsbyJS Test Blog",
    description: "This blog site is built following the tutorial intro-workshop-gatsbyconf-2021 on gatsbyjs.io",
  },
  plugins: [
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `tomato`,
        // Disable the loading spinner.
        showSpinner: true,
      },
    },
  ],
};
