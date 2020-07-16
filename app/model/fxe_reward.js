'use strict';

const mongoose = require('mongoose');

module.exports = app => {
  const model = require('path').basename(__filename, '.js');
  const attributes = {
    code: {
      type: String,
    },
    name: {
      type: String,
    },
    title: {
      type: String,
    },
    type: {
      type: String,
    },
    reason: {
      type: String,
    },
    money: {
      type: String,
    },
    deadline: {
      type: String,
    },
    completeStandard: {
      type: String,
    },
  };

  const schema = app.MongooseSchema(model, attributes);

  return app.mongooseDB.get('default').model(model, schema, model);
};
