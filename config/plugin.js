'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  static: {
    enable: true,
  },
  security: {
    enable: false,
  },
  cors: {
    enable: true,
    package: 'egg-cors',
  },
  mongoose: {
    enable: true,
    package: 'egg-mongoose',
  },
};
