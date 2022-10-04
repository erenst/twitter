/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [ "upload.wikimedia.org","encrypted-tbn0.gstatic.com","images.unsplash.com",'cdn.cms-twdigitalassets.com' ]
  }
};

module.exports = nextConfig;
