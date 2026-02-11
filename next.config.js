/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add basePath for GitHub Pages
  basePath: '/Nachiket_Rao',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  output: 'export',
  webpack: (config, { isServer }) => {
    // Ignore Sentry internal modules that are not needed
    config.resolve.alias = {
      ...config.resolve.alias,
      '@sentry-internal/feedback': false,
    };
    return config;
  },
}

module.exports = nextConfig
