module.exports = {
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node",
  ],
  "moduleNameMapper": {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$"
      : "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|less|sass|scss)$": "identity-obj-proxy"
  },
  "roots": [
    "<rootDir>/src",
  ],
  "setupFilesAfterEnv": ["<rootDir>/src/setupEnzyme.ts"],
  "snapshotSerializers": ["enzyme-to-json/serializer"],
  "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.(tsx?|jsx?|js?)$",
  "transform": {
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.tsx?$": "ts-jest"
  },
};
