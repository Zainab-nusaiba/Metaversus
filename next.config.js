/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "build",
  experimental: {
    appDir: true,
    unoptimized: true,
  },
};

module.exports = nextConfig;
