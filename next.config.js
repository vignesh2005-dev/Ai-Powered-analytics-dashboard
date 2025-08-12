/** @type {import('next').NextConfig} */
const nextConfig = {
  // Completely disable SWC
  swcMinify: false,
  experimental: {
    forceSwcTransforms: false,
    swcTraceProfiling: false,
    runtime: undefined,
  },
  compiler: {
    // Disable all SWC compiler features
    removeConsole: false,
    reactRemoveProperties: false,
    relay: false,
    emotion: false,
    styledComponents: false,
  },
  // Force webpack to handle all transpilation
  webpack: (config, { dev, isServer }) => {
    // Remove any SWC loaders and replace with babel-loader
    config.module.rules.forEach((rule) => {
      if (rule.use) {
        if (Array.isArray(rule.use)) {
          rule.use.forEach((use) => {
            if (use.loader && use.loader.includes('next-swc-loader')) {
              use.loader = 'babel-loader'
              use.options = {
                presets: ['next/babel'],
              }
            }
          })
        } else if (rule.use.loader && rule.use.loader.includes('next-swc-loader')) {
          rule.use.loader = 'babel-loader'
          rule.use.options = {
            presets: ['next/babel'],
          }
        }
      }
    })
    
    return config
  },
}

module.exports = nextConfig