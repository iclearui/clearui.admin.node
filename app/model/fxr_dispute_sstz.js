'use strict';

const mongoose = require('mongoose');

module.exports = app => {
    const model = require('path').basename(__filename, '.js');
    const attributes = {
        code: {
            type: String,
        },
        name: {
            type: String,
        },
        creditor:{
            type: String,//债权人
        },
        debtor:{
            type: String,//债务人
        },
        disputeType:{
            type: String,//纠纷类型
        },
        caseMoney:{
            type:Number,//涉案金额
        },
        caseState:{
            type:Number,////案情状态
        },
        caseStage:{
            type:Number,//案情阶段
        },
        caseDesc:{
            type: String,//案情简介
        },
        idFiles:[ new mongoose.Schema({
            idFile: {
                type: mongoose.Schema.ObjectId,
                ref: 'sys_file',
            },
        }) ],
    };

    const schema = app.MongooseSchema(model, attributes);

    return app.mongooseDB.get('default').model(model, schema, model);
};