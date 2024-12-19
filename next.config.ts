/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Statik export modu
  trailingSlash: true, // URL'lerin sonunda '/' bulunmasını sağlar
  // basePath ve assetPrefix ayarlarını yerel çalışmada devre dışı bırakıyoruz
  // basePath: process.env.NODE_ENV === 'production' ? '/portfolio-web' : '',
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio-web' : '',
};

module.exports = nextConfig;
