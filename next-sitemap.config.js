/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://cursor-guide.vercel.com', // 替换为您的网站 URL
    generateRobotsTxt: true,
    changefreq: 'daily',
    priority: 0.7,
    sitemapSize: 5000,
    exclude: ['/server-sitemap.xml'], // 排除动态生成的 sitemap
    robotsTxtOptions: {
      additionalSitemaps: [
        'https://cursor-guide.vercel.com/server-sitemap.xml', // 添加动态生成的 sitemap
      ],
    },
  }