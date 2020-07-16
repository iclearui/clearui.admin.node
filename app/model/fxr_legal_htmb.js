'use strict';

const mongoose = require('mongoose');

module.exports = app => {
  const model = require('path').basename(__filename, '.js');
  const attributes = {
    idClass: {
      type: mongoose.Schema.ObjectId,
      ref: 'fxr_legal_htmb_class',
    },
    contractCode: {
      type: String,
    },
    contractName: {
      type: String,
    },
    price:{
      type: Number,
    },
    idFilePdf: {
      type: mongoose.Schema.ObjectId,
      ref: 'sys_file',
    },
    idFileWord: {
      type: mongoose.Schema.ObjectId,
      ref: 'sys_file',
    },
    desc: {
      type: String,
    },
    memo: {
      type: String,
    },
    order: {
      type: Number,
      default: 999,
    },
  };

  const schema = app.MongooseSchema(model, attributes);

  return app.mongooseDB.get('default').model(model, schema, model);
};
