module.exports = {
  presets: [ "babel-preset-expo" ],
  plugins: [
    "@babel/plugin-proposal-optional-chaining",
    [
      "module-resolver",
      {
        alias: {
          "@": "./resources/js/",
          "@native": "./resources/js/bundles/native",
          "@web": "./resources/js/bundles/web"
        }
      }
    ]
  ],
  env: {
    test: {
      presets: [
        ["@babel/preset-env", { "targets": { "node": "current" }}], 
        "@babel/preset-react", 
        "@babel/preset-typescript"
      ]
    }
  }
}