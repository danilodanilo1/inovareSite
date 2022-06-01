module.exports = {
    siteUrl: 'https://www.inovareredesdeprotecao.com.br',
    generateRobotsTxt: true, // opcional
    priority: null,
    changefreq: null,
    exclude: ['/server-sitemap.xml', '/post/*'],
    robotsTxtOptions: {
      additionalSitemaps: ['https://www.inovareredesdeprotecao.com.br/server-sitemap.xml'],
    },
  }