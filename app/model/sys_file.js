'use strict';

const mongoose = require('mongoose');

module.exports = app => {
  const model = require('path').basename(__filename, '.js');
  const attributes = {
    fileCode: {
      name: '文件编码',
      type: String,
    },
    fileName: {
      name: '文件名称',
      type: String,
    },
    fileType: {
      name: '文件类型',
      type: String,
    },
    fileSize: {
      name: '文件大小',
      type: String,
    },
    filePath: {
      name: '文件路径',
      type: String,
    },
  };

  const schema = app.MongooseSchema(model, attributes);

  return app.mongooseDB.get('default').model(model, schema, model);
};
