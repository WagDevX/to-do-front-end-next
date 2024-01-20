/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  experimental: {
    scrollRestoration: true,
    serverActions: {
			allowedOrigins: ['super-duper-fortnight-v4j5gqjwrr6fxvg7-3000.app.github.dev', 'localhost:3000']
		},
  },
};

module.exports = nextConfig;
