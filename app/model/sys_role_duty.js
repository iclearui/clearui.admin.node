'use strict';

const mongoose = require('mongoose');

module.exports = app => {
  const model = require('path').basename(__filename, '.js');
  const attributes = {
    idRole: {
      name: '角色id',
      type: mongoose.Schema.ObjectId,
      ref: 'sys_role',
    },
    idDuty: {
      name: '职责id',
      type: mongoose.Schema.ObjectId,
      ref: 'sys_duty',
    },
    idOrgan: {
      type: mongoose.Schema.ObjectId,
      ref: 'org_organ',
    },
  };

  const schema = app.MongooseSchema(model, attributes, false, false);

  return app.mongooseDB.get('default').model(model, schema, model);
};
