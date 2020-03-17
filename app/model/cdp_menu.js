'use strict';

const mongoose = require('mongoose');

module.exports = app => {
  const model = require('path').basename(__filename, '.js');
  const attributes = {
    idApplication: {
      type: mongoose.Schema.ObjectId,
      ref: 'cdp_application',
    },
    p_id: {
      type: String,
    },
    name: {
      type: String,
    },
    location: {
      type: String,
    },
    type: {
      type: String,
      enum: [ 'R', 'M', 'MWR' ],
    },
    icon: {
      type: String,
      default: 'folder',
    },
    routeName: {
      type: String,
    },
    routePath: {
      type: String,
    },
    resolvePath: {
      type: String,
    },
    meta: {
      type: String,
    },
    order: {
      type: Number,
      default: 999,
    },
  };

  const schema = app.MongooseSchema(model, attributes, false);

  schema.virtual('key').get(function() {
    return this._id;
  });
  schema.virtual('title').get(function() {
    return this.name;
  });

  return app.mongooseDB.get('default').model(model, schema, model);
};
