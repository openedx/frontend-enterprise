const path = require('path');

const extendESLintConfig = (config) => {
  const importNoUnresolved = config.rules['import/no-unresolved'];
  if (importNoUnresolved ) {
    const originalIgnore = importNoUnresolved[1].ignore;
    if (!originalIgnore.includes('@edx/frontend-enterprise-*')) {
      importNoUnresolved[1].ignore = [...originalIgnore, '@edx/frontend-enterprise-*'];
    }
  }
  config.settings = {
    ...config.settings,
    'import/resolver': {
      alias: [
        ['@edx/frontend-enterprise-utils', '../utils/src'],
      ],
    },
  };
};

module.exports =  extendESLintConfig;
