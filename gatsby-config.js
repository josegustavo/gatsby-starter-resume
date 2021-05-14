module.exports = {
  siteMetadata: {
    title: `Jose Quilca | Web Developer`,
    title_es: `Jose Quilca | Desarrollardor Web`,
    author: `Jose Quilca`,
    description: `Passionate technologist with a multidisciplinary knowledge acquired over 7+ years in the IT industry, focused on building a wide range of high demand and high availability products.`,
    description_es: `Apasionado por la tecnología con conocimiento multidisciplinario adquirido durante más de 7 años en la industria de TI, enfocado en construir una amplia gama de productos de alta demanda y alta disponibilidad.`,
    siteUrl: `https://jose.quilca.me/`,
    social: {
      twitter: `josegustavo`,
    },
  },
  plugins: [
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-svgr-loader',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: `gatsby-theme-i18n`,
      options: {
        defaultLang: `en`,
        locales: process.env.LOCALES,
        configPath: require.resolve(`./i18n/config.json`),
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jose Quilca | Web Developer`,
        short_name: `CV`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#095b8c`,
        display: `standalone`,
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-offline',
  ],
};
