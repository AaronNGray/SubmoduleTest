var path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/Test.js',
  output: {
    "path": path.resolve(__dirname, 'dist'),
    "filename": 'Test.js',
    "library": 'Test',
    //"libraryTarget": 'umd'
  }
};
