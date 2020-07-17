'use strict';

const mongoose = require('mongoose');

module.exports = app => {
  const model = require('path').basename(__filename, '.js');
  const attributes = {
    businessType: {
      type: String,
      enum: [ 'LSH', 'HTPS', 'SWTP', 'JZDC' ],
    },
    code: {
      type: String,
    },
    name: {
      type: String,
    },
    creditor: {
      type: String, // 委托人
    },
    purpose: {
      type: String, // 评审目的
    },
    deadline: {
      type: String, // 评审期限
    },
    desc: {
      type: String, // 简介
    },
    idFiles: [ new mongoose.Schema({
      idFile: {
        type: mongoose.Schema.ObjectId,
        ref: 'sys_file',
      },
    }) ],
    // 合同评审

    // 出具律师
    writeTo: {
      type: String, // 致函对象
    },
    // 商务谈判
    address: {
      type: String, // 致函对象
    },
    // 法律调查
    court: {
      type: String, // 受理法院
    },
    surveyObject: {
      type: String, // 调查对象
    },
    surveyArea: {
      type: String, // 调查区域
    },
    surveyContent: {
      type: String, // 调查事项
    },
  };

  const schema = app.MongooseSchema(model, attributes);


  schema.post('validate', async (value, next) => {
    const ctx = app.createAnonymousContext();
    const date = new Date();
    const Prefix = value.businessType + date.getFullYear() + '' + ctx.helper.appendOneZero(date.getMonth() + 1) + '' + ctx.helper.appendOneZero(date.getDate());
    const record = await ctx.model.FxeLegal.findOne({ code: new RegExp(Prefix, 'i') }).sort('-code');
    value.code = Prefix + ctx.helper.appendFourZero(record ? parseInt(record.code.slice(value.businessType.length + 8)) + 1 : 1);
    value.name = value.code;
    next();
  });

  return app.mongooseDB.get('default').model(model, schema, model);
};
