'use strict';

const mongoose = require('mongoose');

module.exports = app => {
  const model = require('path').basename(__filename, '.js');
  const attributes = {
    idApplication: {
      type: mongoose.Schema.ObjectId,
      ref: 'cdp_application',
    },
    code: {
      type: String,
    },
    name: {
      type: String,
    },
    type: {
      type: String,
    },
    defaultValue: {
      type: String,
    },
    range: {
      type: Array,
    },
    order: {
      type: Number,
      default: 999,
    },
  };

  const schema = app.MongooseSchema(model, attributes, false);

  return app.mongooseDB.get('default')
    .model(model, schema, model);
};
