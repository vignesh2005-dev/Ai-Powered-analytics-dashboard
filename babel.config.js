module.exports = {
  presets: [
    [
      'next/babel',
      {
        'preset-env': {
          targets: {
            node: '18',
          },
        },
      },
    ],
  ],
  plugins: [],
  env: {
    development: {
      presets: ['next/babel'],
    },
    production: {
      presets: ['next/babel'],
    },
    test: {
      presets: ['next/babel'],
    },
  },
}