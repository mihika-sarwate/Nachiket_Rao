/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add basePath for GitHub Pages
  // Add basePath for GitHub Pages only when building for production
  basePath: process.env.NODE_ENV === 'production' ? '/Nachiket_Rao' : '',
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  output: process.env.NODE_ENV === 'production' ? 'export' : undefined,
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
