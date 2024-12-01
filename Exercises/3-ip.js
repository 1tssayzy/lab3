'use strict';

const ipToInt = (ip = '127.0.0.1') => {
  const pparse = (res, item) => (res << 8) + parseInt(item);
  return ip.split('.').reduce(pparse, 0);
};

module.exports = { ipToInt };
