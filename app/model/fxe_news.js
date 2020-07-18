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
        title: {
            type: String,
        },
        subTitle: {
            type: String,
        },
        type:{
            type: String,
            enum:['1','2'],
            default:'1'
        },
        image: {
            type: mongoose.Schema.ObjectId,
            ref: 'sys_file',
        },
        thumb: {
            type: mongoose.Schema.ObjectId,
            ref: 'sys_file',
        },
        content: {
            type: String,
        }
    };

    const schema = app.MongooseSchema(model, attributes);

    return app.mongooseDB.get('default').model(model, schema, model);
};
