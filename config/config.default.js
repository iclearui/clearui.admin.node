/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1584109703298_6225';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  config.mongoose = {
    clients: {
      default: {
        url: 'mongodb://mongo.lentrue.com/com-iclearui-admin',
        options: {
          user: 'iclear',
          pass: 'iclear',
        },
      },
    },
  };

  config.cors = {
    allowHeaders: [ 'Content-Type', 'X-Requested-With', 'x-csrf-token' ],
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
    credentials: true,
  };

  config.static = {
    prefix: '/',
    dir: require('path').join(appInfo.baseDir, 'app/public'),
    dynamic: true,
    preload: true,
    buffer: false,
    maxFiles: 1000,
  };

  return {
    ...config,
    ...userConfig,
  };
};
