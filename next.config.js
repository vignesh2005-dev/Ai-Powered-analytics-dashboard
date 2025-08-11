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
  // Force webpack to handle transpilation
  webpack: (config, { dev, isServer }) => {
    // Disable SWC loader
    config.module.rules.forEach((rule) => {
      if (rule.use && rule.use.loader === 'next-swc-loader') {
        rule.use.loader = 'babel-loader'
      }
    })
    return config
  },
}

module.exports = nextConfig