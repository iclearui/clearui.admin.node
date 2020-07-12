'use strict';
const mongoose = require('mongoose');
module.exports = {
  MongooseSchema(model, attributes, hasOwnerAttributes, hasStateAttributes) {
    const Schema = new mongoose.Schema(attributes, { timestamps: true });

    Schema.plugin(require('mongoose-deep-populate')(mongoose));

    //默认添加组织记录归属字段,如属性为false则不添加
    if (hasOwnerAttributes || hasOwnerAttributes === void (0)) {
      Schema.add({
        idOrgan: {
          type: mongoose.Schema.ObjectId,
          ref: 'org_organ',
        },
      });
    }
    //默认添加数据记录状态字段,如属性为false则不添加
    if (hasStateAttributes || hasStateAttributes === void (0)) {
      Schema.add({
        __s: {
          type: Number,
          default: 1,
        },
        __r: {
          type: Number,
          default: 0,
        },
      });
    }

    Schema.add({
      createdUser: {
        type: mongoose.Schema.ObjectId,
        ref: 'sys_user',
      },
      updatedUser: {
        type: mongoose.Schema.ObjectId,
        ref: 'sys_user',
      },
    });

    Schema.set('toJSON', { getters: true, virtuals: true });

    Schema.set('toObject', { getters: true, virtuals: true });

    return Schema;
  },
};
