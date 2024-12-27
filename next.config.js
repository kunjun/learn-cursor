/** @type {import('next').NextConfig} */
const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.js',
  // 仅应用于 `/docs` 路由
  extensible: true,
})

const path = require('path')

module.exports = withNextra({
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  images: {
    domains: ['mintlify.s3-us-west-1.amazonaws.com'],
  },
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname, 'src')
    return config
  },
  // 确保 API 路由可以正常工作
  async rewrites() {
    return [
      {
        source: '/docs/:path*',
        destination: '/docs/:path*',
      },
    ]
  },
  async redirects() {
    return [
      // 将 HTTP 重定向到 HTTPS
      {
        source: '/:path*',
        has: [
          {
            type: 'header',
            key: 'x-forwarded-proto',
            value: 'http',
          },
        ],
        permanent: true,
        destination: 'https://:path*',
      },
      // 将非 www 重定向到 www
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'learn-cursor.vercel.com',
          },
        ],
        permanent: true,
        destination: 'https://learn-cursor.vercel.com/:path*',
      },
    ]
  },
  async generateMetadata() {
    return {
      metadataBase: new URL('https://learn-cursor.vercel.com'),
      alternates: {
        canonical: '/',
      },
    }
  },
  i18n: {
    locales: ['zh'],
    defaultLocale: 'zh',
  },
  // 添加额外的头部标签
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          }
        ]
      }
    ]
  }
})