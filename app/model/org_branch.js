'use strict';

const mongoose = require('mongoose');

module.exports = app => {
    const model = require('path').basename(__filename, '.js');
    const attributes = {
        p_id: {
            name: '分级',
            type: String,
        },
        branchCode: {
            name: '分支编码',
            type: String,
        },
        branchName: {
            name: '分支名称',
            type: String,
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