import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(mp4|webm|mov)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next/static/media/',
            outputPath: `${isServer ? '../' : ''}static/media/`,
            name: '[name].[hash].[ext]',
          },
        },
      ],
    });
    return config;
  },
};

export default nextConfig;