// eslint-disable-next-line import/no-extraneous-dependencies
const { createConfig } = require('@openedx/frontend-build');
const extendESLintConfig = require('../../common/extendESLintConfig');

const config = createConfig('eslint');
extendESLintConfig(config);

module.exports = config;
