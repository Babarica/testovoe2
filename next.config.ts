import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/testovoe2',
  assetPrefix: '/testovoe2/',
};

export default nextConfig;
