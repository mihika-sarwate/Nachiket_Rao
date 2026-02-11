/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
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
