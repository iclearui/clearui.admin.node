'use strict';

const mongoose = require('mongoose');


module.exports = app => {
  const model = require('path')
    .basename(__filename, '.js');
  const attributes = {
    p_id: {
      type: String,
      default: '0',
    },
    organCode: {
      name: '组织编码',
      type: String,
    },
    organName: {
      name: '组织名称',
      type: String,
    },
    inviteCode: {
      name: '邀请码',
      type: String,
    },
    order: {
      name: '排序号',
      type: Number,
      default: 999,
    },
    idGroupOrgan: {
      type: mongoose.Schema.ObjectId,
      ref: 'org_organ',
    },
    authUser: {
      type: mongoose.Schema.ObjectId,
      ref: 'sys_user',
    },
    // 公司信息
    establishTime: {
      name: '成立时间',
      type: String,
    },
    legalPerson: {
      name: '法人',
      type: String,
    },
    registeredCapital: {
      type: Number,
    },
    trade: {
      name: '行业',
      type: String,
    },
    phone: {
      name: '电话',
      type: String,
    },
    area: {
      name: '区域',
      type: Array,
    },
    address: {
      name: '地址',
      type: String,
    },

    // 社会信用代码
    socialCreditCode: String,
    invoicePhone: String,
    businessLicense: {
      name: '营业执照',
      type: mongoose.Schema.ObjectId,
      ref: 'sys_file',
    },
    idTrade: {
      type: mongoose.Schema.ObjectId,
      ref: 'e_shop_trade',
    },
    logo: String,
    description: String,
    memo: {
      name: '备注',
      type: String,
    },
    isIdentify: {
      type: Boolean,
      default: false,
    },
    isBaseVersion: {
      type: Boolean,
      default: false,
    },
    isPurchaseVersion: {
      type: Boolean,
      default: false,
    },
    isSalesVersion: {
      type: Boolean,
      default: false,
    },


    // __s: 1 default: ; 0 该组织账号未启用；
  };

  const schema = app.MongooseSchema(model, attributes, false);

  schema.virtual('supplierName').get(function() {
    return this.organName;
  });
  schema.virtual('customerName').get(function() {
    return this.organName;
  });
  schema.virtual('invoiceTitle').get(function() {
    return this.organName;
  });
  schema.virtual('invoiceTaxId').get(function() {
    return this.socialCreditCode;
  });
  schema.virtual('invoiceAddress').get(function() {
    return this.address;
  });
  schema.post('validate', async (value, next) => {
    const ctx = app.createAnonymousContext();
    const getInviteCode = async () => {
      const organCode = ctx.helper.generateVerifyCode('nu', 6);
      if (await ctx.model.OrgOrgan.count({ organCode }) > 0) {
        return getInviteCode();
      }
      return organCode;
    };
    value.inviteCode = await getInviteCode();
    value.organCode = value.organCode ? value.organCode : value.inviteCode;
    next();
  });

  schema.post('save', async (doc, next) => {
    const ctx = app.createAnonymousContext();
    if (doc.p_id === '0') {
      await ctx.model.OrgOrgan.update({ _id: doc._id }, { idGroupOrgan: doc._id });
    }
    next();
  });

  return app.mongooseDB.get('default')
    .model(model, schema, model);
};
