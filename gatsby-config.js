module.exports = {
    siteMetadata: {
        title: 'DIGI-TAILS Product Request',
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        'svgo',
        'gatsby-plugin-sass',
        'gatsby-plugin-postcss',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'data',
                path: `${__dirname}/src/data/`,
            },
        },
        'gatsby-transformer-json',
        {
            resolve: 'gatsby-plugin-prefetch-google-fonts',
            options: {
                fonts: [
                    {
                        family: 'Roboto',
                        variants: [
                            '400',
                            '400i',
                            '700',
                            '700i',
                        ],
                        subsets: [
                            'latin-ext',
                        ],
                    },
                    {
                        family: 'Montserrat',
                        variants: ['200', '300', '400', '500', '700'],
                    },
                ],
            },
        },
    ],
};
