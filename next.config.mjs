import withPlaiceholder from "@plaiceholder/next";
/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  swcMinify: true,
};

export default withPlaiceholder(nextConfig);
