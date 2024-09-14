/** @type {import('next').NextConfig} */
const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.js',
  // 仅应用于 `/docs` 路由
  extensible: true,
})

const path = require('path')

module.exports = withNextra({
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname, 'src')
    return config
  },
  // 移除以下重定向配置以解决问题
  // async redirects() {
  //   return [
  //     {
  //       source: '/',
  //       destination: '/docs',
  //       permanent: true,
  //     },
  //   ]
  // },
})
