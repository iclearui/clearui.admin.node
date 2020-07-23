'use strict';

const mongoose = require('mongoose');

module.exports = app => {
    const model = require('path').basename(__filename, '.js');
    const attributes = {
        idTemplate: {
            type: mongoose.Schema.ObjectId,
            ref: 'cdp_template',
        },
        field: {
            name: '字段',
            type: String,
        },
        fieldName: {
            name: '字段名称',
            type: String,
        },
        fieldType: {
            name: '类型',
            type: String,
        },
        display: {
            name: '显示名称',
            type: String,
        },
        displayWidth: {
            name: '宽度',
            type: Number,
        },
        visible: {
            name: '是否显示',
            type: Boolean,
            default: true,
        },
        readonly: {
            name: '是否只读',
            type: Boolean,
            default: false,
        },
        required: {
            name: '是否必填',
            type: Boolean,
            default: false,
        },
        location: {
            type: String,
            enum: [ 'T', 'M', 'B' ],
        },
        order: {
            name: '排序号',
            type: Number,
            default: 999,
        },
    };

    const schema = app.MongooseSchema(model, attributes);

    return app.mongooseDB.get('default').model(model, schema, model);
};
