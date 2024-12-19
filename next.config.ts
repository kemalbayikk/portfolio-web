/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/portfolio-website', // Repo adınızı buraya yazın
  assetPrefix: '/portfolio-website', // Statik dosyalar için doğru yolu ayarlayın
  trailingSlash: true, // Tüm URL'lerin "/" ile bitmesini sağlar
};

module.exports = nextConfig;
