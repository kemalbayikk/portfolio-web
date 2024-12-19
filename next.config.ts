/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/portfolio-web', // GitHub repo adıyla aynı
  assetPrefix: '/portfolio-web/', // Statik dosyalar için prefix
};

module.exports = nextConfig;