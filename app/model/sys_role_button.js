'use strict';

const mongoose = require('mongoose');

module.exports = app => {
  const model = require('path').basename(__filename, '.js');
  const attributes = {
    idRole: {
      type: mongoose.Schema.ObjectId,
      ref: 'sys_role',
    },
    idMenu: {
      type: mongoose.Schema.ObjectId,
      ref: 'cdp_menu',
    },
    idMenuButton: {
      type: mongoose.Schema.ObjectId,
      ref: 'cdp_menu_button',
    },
    idApplication: {
      type: mongoose.Schema.ObjectId,
      ref: 'cdp_application',
    },
  };

  const schema = app.MongooseSchema(model, attributes, false,false);

  return app.mongooseDB.get('default').model(model, schema, model);
};