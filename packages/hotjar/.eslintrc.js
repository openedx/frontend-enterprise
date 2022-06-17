const { createConfig } = require('@edx/frontend-build');
const extendESLintConfig = require('../../common/extendESLintConfig');

const config = createConfig('eslint');
extendESLintConfig(config);

module.exports = config;
