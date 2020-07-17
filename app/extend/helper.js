'use strict';

module.exports = {
  get humps() {
    return require('humps');
  },
  appendFourZero(obj) {
    if (obj > 0 && obj < 10) {
      return '000' + '' + obj;
    } else if (obj >= 10 && obj < 100) {
      return '00' + '' + obj;
    } else if (obj >= 100 && obj < 1000) {
      return '0' + '' + obj;
    }
    return obj;
  },

  appendOneZero(obj) {
    if (obj < 10) return '0' + '' + obj;
    return obj;
  },
};
