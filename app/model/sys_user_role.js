'use strict';

const mongoose = require('mongoose');

module.exports = app => {
  const model = require('path').basename(__filename, '.js');
  const attributes = {
    idUser: {
      name: '用户ID',
      type: mongoose.Schema.ObjectId,
      ref: 'sys_user',
    },
    idRole: {
      name: '角色ID',
      type: mongoose.Schema.ObjectId,
      ref: 'sys_role',
    },
  };

  const schema = app.MongooseSchema(model, attributes);

  return app.mongooseDB.get('default').model(model, schema, model);
};
