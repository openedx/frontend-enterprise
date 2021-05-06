const { createConfig } = require('@edx/frontend-build');

const config = createConfig('jest');

config.modulePathIgnorePatterns = ['<rootDir>/dist'];

module.exports = config;
