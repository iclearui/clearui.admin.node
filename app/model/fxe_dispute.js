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
    desc: {
      type: String, // 案情简介
    },
    idFiles: [ new mongoose.Schema({
      idFile: {
        type: mongoose.Schema.ObjectId,
        ref: 'sys_file',
      },
    }) ],
    // 诉讼投资


    // 目标对赌
    creditorType: {
      type: String, // 委托人属性
      enum: [ '1', '2' ], // 1:债权人，2：债务人
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

  return app.mongooseDB.get('default').model(model, schema, model);
};
