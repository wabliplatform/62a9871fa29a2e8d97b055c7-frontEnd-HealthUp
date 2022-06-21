const path = require('path');

module.exports = {
  entry: {
	'Homepage' : './javascript/Homepage.js',
	'AppList' : './javascript/AppList.js',
	'Page3' : './javascript/Page3.js',
},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    
  },
};