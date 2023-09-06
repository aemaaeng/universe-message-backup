/** @type {import('next').NextConfig} */
const withImages = require("next-images");
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    formats: ["image/webp", "image/jpeg"],
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
module.exports = withImages();
