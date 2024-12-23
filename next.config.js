/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: ["http://localhost:3000"],
    },
  },
};

module.exports = nextConfig;
