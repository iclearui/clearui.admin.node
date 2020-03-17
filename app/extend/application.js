'use strict';
const mongoose = require('mongoose');
module.exports = {
  MongooseSchema(model, attributes, hasOwnerAttributes, hasStateAttributes) {
    const Schema = new mongoose.Schema(attributes, { timestamps: true });

    Schema.plugin(require('mongoose-deep-populate')(mongoose));

    //默认添加数据记录归属字段,如属性为false则不添加
    if (hasOwnerAttributes || hasOwnerAttributes === void (0)) {
      Schema.add({
        idOrgan: {
          name: '所属组织',
          readonly: true,
          display: false,
          type: mongoose.Schema.ObjectId,
        },
      });
    }
    //默认添加数据记录状态字段,如属性为false则不添加
    if (hasStateAttributes || hasStateAttributes === void (0)) {
      Schema.add({
        __s: {
          name: '状态标记',
          display: false,
          readonly: true,
          type: Number,
          default: 1,
        },
        __r: {
          name: '删除标记',
          display: false,
          readonly: true,
          type: Number,
          default: 0,
        },
      });
    }

    Schema.add({
      createdUser: {
        name: '创建人',
        readonly: true,
        type: mongoose.Schema.ObjectId,
      },
      updatedUser: {
        name: '修改人',
        readonly: true,
        type: mongoose.Schema.ObjectId,
      },
    });

    Schema.set('toJSON', { getters: true, virtuals: true });

    Schema.set('toObject', { getters: true, virtuals: true });

    return Schema;
  },
};
