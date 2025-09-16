import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.icons8.com',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;


export default nextConfig;
