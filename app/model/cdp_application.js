'use strict';

module.exports = app => {
  const model = require('path').basename(__filename, '.js');
  const attributes = {
    code: {
      name: '应用编码',
      type: String,
    },
    name: {
      name: '应用名称',
      type: String,
    },
    icon: {
      name: '图标',
      type: String,
    },
    description: {
      name: '应用介绍',
      type: String,
    },
    version: {
      name: '版本',
      type: String,
      default: '0.0.1',
    },
    order: {
      name: '排序号',
      type: Number,
      default: 999,
    },
  };

  const schema = app.MongooseSchema(model, attributes, false);

  return app.mongooseDB.get('default').model(model, schema, model);
};
