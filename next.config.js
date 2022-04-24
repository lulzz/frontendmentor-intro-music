/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '',
  },
  basePath: '/frontendmentor-intro-music',
  assetPrefix: '/frontendmentor-intro-music',
};

module.exports = nextConfig;
