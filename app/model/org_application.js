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
    license: {
      type: Date,
      default: '9999-12-31',
    },
    clientHost: {
      type: String,
      default: 'https://cloud.emaiban.com',
    },
    serverHost: {
      type: String,
      default: 'https://cloud.emaiban.com',
    },
    clientDevHost: {
      type: String,
    },
    serverDevHost: {
      type: String,
    },
    version: String,
    order: {
      name: '排序号',
      type: Number,
      default: 999,
    },
  };

  const schema = app.MongooseSchema(model, attributes, false, false);

  return app.mongooseDB.get('default').model(model, schema, model);
};
