'use strict';

const mongoose = require('mongoose');


module.exports = app => {
  const model = require('path').basename(__filename, '.js');
  const attributes = {
    p_id: {
      type: String,
      default: '0',
    },
    organCode: {
      name: '组织编码',
      type: String,
    },
    organName: {
      name: '组织名称',
      type: String,
    },
    order: {
      name: '排序号',
      type: Number,
      default: 999,
    },
    idGroupOrgan: {
      type: mongoose.Schema.ObjectId,
      ref: 'org_organ',
    },
    memo: {
      name: '备注',
      type: String,
    },
  };

  const schema = app.MongooseSchema(model, attributes, false);

  schema.post('save', async (doc, next) => {
    const ctx = app.createAnonymousContext();
    if (doc.p_id === '0') {
      await ctx.model.OrgOrgan.update({ _id: doc._id }, { idGroupOrgan: doc._id });
    }
    next();
  });

  return app.mongooseDB.get('default').model(model, schema, model);
};
