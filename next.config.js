/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const isGitHubPages = process.env.GITHUB_PAGES === 'true'

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: isGitHubPages ? '/prow-security' : '',
  assetPrefix: isGitHubPages ? '/prow-security' : '',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig









