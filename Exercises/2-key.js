'use strict';

const generateKey = (length, possible) => {
  const def = possible.length;
  let key = '';
  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * def);
    key += possible[index];
  }
  return key;
};
console.log(generateKey);
module.exports = { generateKey };
