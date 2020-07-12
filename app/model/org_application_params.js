'use strict';

const mongoose = require('mongoose');

module.exports = app => {
  const model = require('path').basename(__filename, '.js');
  const attributes = {
    idOrgan: {
      type: mongoose.Schema.ObjectId,
      ref: 'org_organ',
    },
    idApplication: {
      type: mongoose.Schema.ObjectId,
      ref: 'cdp_application',
    },
    idApplicationParams: {
      type: mongoose.Schema.ObjectId,
      ref: 'cdp_application_params',
    },
    value: {
      type: String,
    },
  };

  const schema = app.MongooseSchema(model, attributes, false, false);

  return app.mongooseDB.get('default').model(model, schema, model);
};
