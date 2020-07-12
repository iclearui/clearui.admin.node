'use strict';

const mongoose = require('mongoose');

module.exports = app => {
  const model = require('path').basename(__filename, '.js');
  const attributes = {
    idUser: {
      name: '主表id',
      type: mongoose.Schema.ObjectId,
      ref: 'sys_user',
    },
    socket: {
      name: 'socket的id',
      type: String,
    },
    device: {
      name: '设备类型',
      type: String,
      enum: [ 'pc', 'web', 'mobile' ],
    },
  };

  const schema = app.MongooseSchema(model, attributes);
  return app.mongooseDB.get('default').model(model, schema, model);
};
