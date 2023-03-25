const sharpsheet = require('sharpsheet');
const input = './icons/*.svg';
const options = {
  border: 1,
  sheetDimension: 512,
  outputQuality: 100,
  mapSprites: true
};
sharpsheet(input, './dist', options);
