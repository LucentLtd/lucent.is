module.exports = {
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/assets/images`
            }
        },
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-plugin-favicon",
            options: {
                logo: `${__dirname}/src/assets/images/logo.png`
            }
        },
        "gatsby-plugin-react-helmet",
        {
            resolve: "gatsby-plugin-postcss",
            options: {
                // config: { path: "." }
                postCssPlugins: [
                    require(`postcss-preset-env`)({ stage: 0 }),
                    require("postcss-import"),
                    require("postcss-extend"),
                    require("tailwindcss")
                ]
            }
        }
    ]
};
