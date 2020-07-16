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
        executor:{
            type: String,//执行人
        },
        contract:{
            type: String,//联系方式
        },
        address:{
            type: String,//联系地址
        },
        executedPerson:{
            type: String,//被执行人
        },
        executeTarget:{
            type: String,//执行标的
        },
        executeCourt:{
            type: String,//执行法院
        },
        caseMoney:{
            type:String,//涉案金额
        },
        executedState:{
            type:Number,////案情状态
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