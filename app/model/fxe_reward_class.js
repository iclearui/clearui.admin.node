'use strict';

const mongoose = require('mongoose');

module.exports = app => {
  const model = require('path').basename(__filename, '.js');
  const attributes = {
    p_id: {
      type: String,
    },
    classCode: {
      type: String,
    },
    className: {
      type: String,
    },
    order: {
      type: Number,
      default: 999,
    },
  };

  const schema = app.MongooseSchema(model, attributes);

  return app.mongooseDB.get('default').model(model, schema, model);
};
