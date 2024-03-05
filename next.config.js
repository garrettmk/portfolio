const withMDX = require('@next/mdx')();

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['tsx', 'mdx'],
  output: 'export',
  images: {
    unoptimized: true,
  },
};

module.exports = withMDX(nextConfig);
