/** @type {import('next').NextConfig} */
const withImages = require("next-images");

const nextConfig = withImages({
  experimental: {
    appDir: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  compiler: {
    styledComponents: true,
  },
  swcMinify: true,
});

module.exports = nextConfig;
