import withPlaiceholder from "@plaiceholder/next";
import withImages from "next-images";
/** @type {import('next').NextConfig} */

const nextConfig = withImages({
  experimental: {
    appDir: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  swcMinify: true,
});

export default withPlaiceholder(nextConfig);
