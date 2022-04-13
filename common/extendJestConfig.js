const extendJestConfig = (config) => {
  const modulePathsToIgnore = ['<rootDir>/dist'];
  config.modulePathIgnorePatterns = config.modulePathIgnorePatterns ? [...config.modulePathIgnorePatterns, ...modulePathsToIgnore] : modulePathsToIgnore;
  config.moduleNameMapper = {
    ...config.moduleNameMapper,
    '@edx/frontend-enterprise-(.*)': '<rootDir>/../$1/src',
  };
};

module.exports =  extendJestConfig;
