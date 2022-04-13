const path = require('path');
const { createConfig } = require('@edx/frontend-build');

const config = createConfig('jest');

config.modulePathIgnorePatterns = ['<rootDir>/dist'];
config.moduleNameMapper = {
  '@edx/frontend-enterprise-utils': path.resolve(__dirname, '../utils/src'),
};
// config.transformIgnorePatterns = ["node_modules/(?!(@edx/frontend-enterprise-utils)/)"];

module.exports = config;
