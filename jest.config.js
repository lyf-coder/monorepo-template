module.exports = {
    roots: [
        // config sub packages
      "<rootDir>/packages/hello/test"
    ],
    testRegex: 'test/(.+)\\.test\\.(jsx?|tsx?|ts?|)$',
    transform: {
      '^.+\\.(ts|tsx)$': 'ts-jest',
  },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    testTimeout: 30000
  };