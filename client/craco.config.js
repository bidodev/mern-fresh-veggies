/* craco.config.js */
const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@store': path.resolve(__dirname, './src/store'),
      '@hocs': path.resolve(__dirname, './src/hocs'),
    },
  },
};
