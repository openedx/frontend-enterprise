const { createConfig } = require('@edx/frontend-build');
const extendJestConfig = require('../../common/extendJestConfig');

const config = createConfig('jest');
extendJestConfig(config);

module.exports = config;
