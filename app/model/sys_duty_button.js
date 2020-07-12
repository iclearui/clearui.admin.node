'use strict';

const mongoose = require('mongoose');

module.exports = app => {
  const model = require('path').basename(__filename, '.js');
  const attributes = {
    idDuty: {
      name: '职责id',
      type: mongoose.Schema.ObjectId,
      ref: 'sys_duty',
    },
    idApplication: {
      name: '应用id',
      type: mongoose.Schema.ObjectId,
      ref: 'sys_application',
    },
    idMenu: {
      name: '组件id',
      type: mongoose.Schema.ObjectId,
      ref: 'cdp_menu',
    },
    idMenuButton: {
      name: '组件按钮id',
      type: mongoose.Schema.ObjectId,
      ref: 'cdp_menu_button',
    },
    order: {
      name: '排序号',
      type: Number,
      default: 999,
    },
  };

  const schema = app.MongooseSchema(model, attributes, false, false);

  return app.mongooseDB.get('default').model(model, schema, model);
};
