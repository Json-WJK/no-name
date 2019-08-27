const path = require('path'),
  resolve = dir => path.join(__dirname, dir);

module.exports = {
  plugins: [
    require('postcss-pxtorem')({
      rootValue: 100,
      minPixelValue: 2,
      propWhiteList: []
    })
  ]
}