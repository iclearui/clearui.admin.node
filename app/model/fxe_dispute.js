'use strict';

const mongoose = require('mongoose');

module.exports = app => {
  const model = require('path').basename(__filename, '.js');
  const attributes = {
    businessType: {
      type: String,
      enum: [ 'MBDD', 'SSTZ', 'XZZX', 'ZQZR' ],
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
    debtor: {
      type: String, // 对方名称
    },
    contract: {
      type: String, // 联系方式
    },
    area: {
      type: String, // 联系地区
    },
    address: {
      type: String, // 联系地址
    },
    disputeType: {
      type: String, // 纠纷类型
    },
    caseMoney: {
      type: String, // 涉案金额
    },
    caseState: {
      type: Number, // //案情状态
    },
    caseStage: {
      type: Number, // 案情阶段
    },
    verifyOpinion:{
      type: String, // 案情简介
    },
    reviewOpinion:{
      type: String, // 案情简介
    },
    expertOpinion:{
      type: String, // 案情简介
    },
    idLawyer:{
      type: mongoose.Schema.ObjectId,
      ref: 'sys_user',
    },//制定律师
    desc: {
      type: String, // 案情简介
    },
    idFiles: [ new mongoose.Schema({
      idFile: {
        type: mongoose.Schema.ObjectId,
        ref: 'sys_file',
      },
    }) ],
    idVerifyFiles: [ new mongoose.Schema({
      idFile: {
        type: mongoose.Schema.ObjectId,
        ref: 'sys_file',
      },
    }) ],
    idReviewFiles: [ new mongoose.Schema({
      idFile: {
        type: mongoose.Schema.ObjectId,
        ref: 'sys_file',
      },
    }) ],
    idSignUpFiles: [ new mongoose.Schema({
      idFile: {
        type: mongoose.Schema.ObjectId,
        ref: 'sys_file',
      },
    }) ],
    idExpertFiles: [ new mongoose.Schema({
      idFile: {
        type: mongoose.Schema.ObjectId,
        ref: 'sys_file',
      },
    }) ],
    // 诉讼投资

    //__s -1:已拒绝 0:资料待补偿 1：已提交 2、内部评审 3、专家评审 4、待签约（报价）  5 已签约（签约）


    // 目标对赌
    creditorType: {
      type: String, // 委托人属性
      enum: [ '0', '1' ], // 1:债权人，2：债务人
    },
    objectMoney: {
      type: String, // 目标金额
    },
    // 协助执行
    target: {
      type: String, // 执行标的
    },
    court: {
      type: String, // 执行法院
    },
    // 债权转让
    sellType: {
      type: String, // 出让方式
    },
    sellMoney: {
      type: String, // 出让金额
    },
  };

  const schema = app.MongooseSchema(model, attributes);

  schema.post('validate', async (value, next) => {
    const ctx = app.createAnonymousContext();
    const date = new Date();
    const Prefix = value.businessType + date.getFullYear() + '' + ctx.helper.appendOneZero(date.getMonth() + 1) + '' + ctx.helper.appendOneZero(date.getDate());
    const record = await ctx.model.FxeDispute.findOne({ code: new RegExp(Prefix, 'i') }).sort('-code');
    value.code = Prefix + ctx.helper.appendFourZero(record ? parseInt(record.code.slice(value.businessType.length + 8)) + 1 : 1);
    next();
  });

  return app.mongooseDB.get('default').model(model, schema, model);
};
