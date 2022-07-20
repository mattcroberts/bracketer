/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  eslint: {
    dirs: ['pages', 'components', 'services'],
  }
}

module.exports = nextConfig
