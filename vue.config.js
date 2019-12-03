// vue.config.js
module.exports = {
  publicPath: './',
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "./src/assets/css/custom.scss"; @import "@nutui/nutui/dist/styles/index.scss";`
      },
      postcss: {
        plugins: [require('postcss-px2rem')({
          remUnit: 50
        })]
      }
    }
  }
}