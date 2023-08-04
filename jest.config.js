module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
  moduleNameMapper: {
    "\\.(jpg|jpeg)$": "identity-obj-proxy",
  },

  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],

  modulePaths: ["<rootDir>"],
};
