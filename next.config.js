/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
    };

    if (!isServer && config.optimization.splitChunks && typeof config.optimization.splitChunks === 'object') {
      config.optimization.splitChunks.cacheGroups = {
        ...config.optimization.splitChunks.cacheGroups,
        three: {
          test: /[\\/]node_modules[\\/]three[\\/]/,
          name: 'three',
          priority: 20,
        },
      };
    }

    return config;
  },
};

export default nextConfig;
