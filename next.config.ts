import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx', 'js'],
  typescript: {
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
