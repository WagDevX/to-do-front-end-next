/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  experimental: {
    scrollRestoration: true,
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "via.placeholder.com",
      },
    ],
  },
};

module.exports = nextConfig;
