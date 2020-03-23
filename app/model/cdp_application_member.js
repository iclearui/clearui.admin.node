'use strict';

const mongoose = require('mongoose');

module.exports = app => {
  const model = require('path').basename(__filename, '.js');
  const attributes = {
    idApplication: {
      type: mongoose.Schema.ObjectId,
      ref: 'cdp_application',
    },
    idUser: {
      type: mongoose.Schema.ObjectId,
      ref: 'sys_user',
    },
    type: {
      type: String,
      enum: [ 'Admin', 'Develop', 'Test' ],
    },
  };

  const schema = app.MongooseSchema(model, attributes, false);

  return app.mongooseDB.get('default').model(model, schema, model);
};
