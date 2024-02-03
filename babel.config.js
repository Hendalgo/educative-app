module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins:[
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ["."],
        alias: {
          "@assets": "./src/assets",
          "@components": "./src/components",
          "@screens": "./src/screens",
          "@utils": "./src/utils",
          "@services": "./src/services",
          "@config": "./src/config",
          "@navigations": "./src/navigations",
          "@styles": "./src/styles",
          "@hooks": "./src/hooks",
        }
      }
    ]
  ]
};
