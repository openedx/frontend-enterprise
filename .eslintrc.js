const { getBaseConfig } = require("@edx/frontend-build");

const config = getBaseConfig("eslint");

config.rules = {
  "import/no-extraneous-dependencies": [
    "error",
    {
      devDependencies: [
        "**/*.config.js",
        "**/*.test.jsx",
        "**/*.test.js",
        "src/utils/tests.jsx",
        "example/*",
      ],
    },
  ],
  "template-curly-spacing": "off",
  "indent": [
    "warn",
    2,
    {
      "ignoredNodes": ["TemplateLiteral"],
      "SwitchCase": 1
    }
  ]
};

module.exports = config;
