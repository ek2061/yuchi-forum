/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    YUCHI_API: "https://yuchi-forum-backend.fly.dev/api",
  },
};

module.exports = nextConfig;
