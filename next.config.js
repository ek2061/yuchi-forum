/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    YUCHI_API: "http://localhost:8000/api",
  },
};

module.exports = nextConfig;
