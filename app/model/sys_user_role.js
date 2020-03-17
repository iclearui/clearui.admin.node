'use strict';

const mongoose = require('mongoose');

module.exports = app => {
  const model = require('path').basename(__filename, '.js');
  const attributes = {
    idUser: {
      type: mongoose.Schema.ObjectId,
      ref: 'sys_user',
    },
    idRole: {
      type: mongoose.Schema.ObjectId,
      ref: 'sys_role',
    },
  };

  const schema = app.MongooseSchema(model, attributes);

  return app.mongooseDB.get('default').model(model, schema, model);
};
