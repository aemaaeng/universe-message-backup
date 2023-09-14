/** @type {import('next').NextConfig} */
const withImages = require("next-images");

const nextConfig = withImages({
  experimental: {
    appDir: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  swcMinify: true,
});

module.exports = nextConfig;
