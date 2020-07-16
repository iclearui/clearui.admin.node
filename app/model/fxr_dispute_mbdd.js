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
        client:{
            type: String,//委托人
        },
        clientType:{
            type: String,//委托人属性
            enum: [ '1', '2'], // 1:债权人，2：债务人
        },
        contract:{
            type: String,//联系方式
        },
        address:{
            type: String,//联系地址
        },
        otherName:{
            type: String,//对方名称
        },
        disputeType:{
            type: String,//纠纷类型
        },
        caseMoney:{
            type:String,//涉案金额
        },
        objectMoney:{
            type:String,//目标金额
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