/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: false,
  experimental: {
    forceSwcTransforms: false,
  },
  compiler: {
    // Disable SWC compiler features
    removeConsole: false,
  },
}

module.exports = nextConfig