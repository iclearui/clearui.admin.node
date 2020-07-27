'use strict';

const mongoose = require('mongoose');

module.exports = app => {
  const model = require('path').basename(__filename, '.js');
  const attributes = {
    idForm: {
      type: mongoose.Schema.ObjectId,
      ref: 'cdp_form',
    },
    field: {
      name: '字段',
      type: String,
    },
    name: {
      name: '字段名称',
      type: String,
    },
    type: {
      name: '类型',
      type: String,
    },
    range: {
      type: Array,
    },
    width: {
      name: '宽度',
      type: Number,
    },
    visible: {
      name: '是否显示',
      type: Boolean,
      default: true,
    },
    readonly: {
      name: '是否只读',
      type: Boolean,
      default: false,
    },
    required: {
      name: '是否必填',
      type: Boolean,
      default: false,
    },
    group: {
      type: String,
    },
    order: {
      name: '排序号',
      type: Number,
      default: 999,
    },
  };

  const schema = app.MongooseSchema(model, attributes);

  return app.mongooseDB.get('default').model(model, schema, model);
};
