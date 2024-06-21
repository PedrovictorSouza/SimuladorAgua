module.exports = {
  testEnvironment: 'node',
  moduleFileExtensions: ['js'],
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)'],
};
