/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/portfolio-web', // Repo adınızı buraya yazın
  assetPrefix: '/portfolio-web', // Statik dosyalar için doğru yolu ayarlayın
  trailingSlash: true, // Tüm URL'lerin "/" ile bitmesini sağlar
};

module.exports = nextConfig;
