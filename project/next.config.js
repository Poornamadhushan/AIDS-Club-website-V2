/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/AIDS-Club-website-V2',
  assetPrefix: '/AIDS-Club-website-V2/',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig