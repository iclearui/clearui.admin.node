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
    scope: {
      type: String,
      enum: [ '1', '2', '3', '4' ], // 1:本人，2：本部门，3：本部门及下属部门，4：全部
    },
  };

  const schema = app.MongooseSchema(model, attributes, false, false);

  return app.mongooseDB.get('default').model(model, schema, model);
};
