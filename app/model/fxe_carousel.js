'use strict';

const mongoose = require('mongoose');

module.exports = app => {
  const model = require('path').basename(__filename, '.js');
  const attributes = {
    code: {
      type: String,
    },
    idFile: {
      type: mongoose.Schema.ObjectId,
      ref: 'sys_file',
    },
    order: {
      type: Number,
      default: 999,
    },
  };

  const schema = app.MongooseSchema(model, attributes);

  schema.post('validate', async (value, next) => {
    const ctx = app.createAnonymousContext();
    const date = new Date();
    const Prefix = 'Carousel'+ date.getFullYear() + '' + ctx.helper.appendOneZero(date.getMonth() + 1) + '' + ctx.helper.appendOneZero(date.getDate());
    const record = await ctx.model.FxeDispute.findOne({ code: new RegExp(Prefix, 'i') }).sort('-code');
    value.code = Prefix + ctx.helper.appendFourZero(record ? parseInt(record.code.slice('Carousel'.length + 8)) + 1 : 1);
    next();
  });

  return app.mongooseDB.get('default').model(model, schema, model);
};
