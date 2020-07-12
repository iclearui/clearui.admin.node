'use strict';

const mongoose = require('mongoose');

module.exports = app => {
  const model = require('path').basename(__filename, '.js');
  const attributes = {
    idDuty: {
      type: mongoose.Schema.ObjectId,
      ref: 'sys_duty',
    },
    idApplication: {
      type: mongoose.Schema.ObjectId,
      ref: 'cdp_application',
    },
    idMenu: {
      type: mongoose.Schema.ObjectId,
      ref: 'cdp_menu',
    },
  };

  const schema = app.MongooseSchema(model, attributes,false,false);

  return app.mongooseDB.get('default').model(model, schema, model);
};
