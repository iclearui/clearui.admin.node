'use strict';

const mongoose = require('mongoose');

module.exports = app => {
  const model = require('path').basename(__filename, '.js');
  const attributes = {
    idApplication: {
      type: mongoose.Schema.ObjectId,
      ref: 'cdp_application',
    },
    idMenu: {
      type: mongoose.Schema.ObjectId,
      ref: 'cdp_menu',
    },
    code: {
      type: String,
    },
    name: {
      type: String,
    },
    title: {
      type: String,
    },
    model: {
      type: String,
    },
    view: {
      type: String,
    },
    description: {
      type: String,
    },
    order: {
      name: '排序号',
      type: Number,
      default: 999,
    },
  };

  const schema = app.MongooseSchema(model, attributes, false);

  return app.mongooseDB.get('default').model(model, schema, model);
};
