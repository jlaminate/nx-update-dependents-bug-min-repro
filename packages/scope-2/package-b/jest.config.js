// eslint-disable-next-line @typescript-eslint/no-var-requires
const baseConfig = require('../../../jest.config.base');
baseConfig.setupFilesAfterEnv = ['<rootDir>/__test_support__/setup.ts'];
module.exports = {
    ...baseConfig,
    testTimeout: 10000,
};
