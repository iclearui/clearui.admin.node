'use strict';

const mongoose = require('mongoose');

module.exports = app => {
    const model = require('path').basename(__filename, '.js');
    const attributes = {
        idApplication: {
            type: mongoose.Schema.ObjectId,
            ref: 'cdp_application',
        },
        name: {
            type: String,
        },
        table: {
            type: String,
        },
        description: {
            type: String,
        },
        groups: [ new mongoose.Schema({
            code:{
                type:String,
            },
            name: {
                type:String,
            },
            type:{
                type:String,
            }
        }) ],
        order: {
            name: '排序号',
            type: Number,
            default: 999,
        },
    };

    const schema = app.MongooseSchema(model, attributes, false);

    return app.mongooseDB.get('default').model(model, schema, model);
};
