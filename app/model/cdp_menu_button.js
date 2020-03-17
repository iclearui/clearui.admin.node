'use strict';

const mongoose = require('mongoose');

module.exports = app => {
  const model = require('path').basename(__filename, '.js');
  const attributes = {
    idMenu: {
      type: mongoose.Schema.ObjectId,
      ref: 'cdp_menu',
    },
    name: {
      type: String,
    },
    type: {
      type: String,
    },
    icon: {
      type: String,
    },
    event: {
      type: String,
    },
    location: {
      type: String,
    },
    order: {
      type: Number,
      default: 999,
    },
  };

  const schema = app.MongooseSchema(model, attributes, false);

  return app.mongooseDB.get('default').model(model, schema, model);
};

