'use strict';

const mongoose = require('mongoose');
const moment = require('moment');
module.exports = app => {
  const model = require('path').basename(__filename, '.js');
  const attributes = {
    noticeTitle: {
      name: '通知标题',
      type: String,
    },
    noticeContent: {
      name: '通知内容',
      type: String,
    },
    publishArea: {
      name: '发布区域',
      type: Array,
    },
    idNoticeClass: {
      name: '通知类别id',
      type: mongoose.Schema.ObjectId,
      ref: 'sys_notice_class',
    },
    publishType: {
      name: '发布类型',
      type: String,
    },
    isEngine: {
      name: '是否底层公告',
      type: Boolean,
      default: true,
    },
    idUser: {
      name: '用户id',
      type: mongoose.Schema.ObjectId,
      ref: 'sys_user',
    },
  };

  const schema = app.MongooseSchema(model, attributes);

  schema.post('save', async (value, next) => {
    const saveDoc = [];
    const users = await app.model.SysUser.find({});
    for (const user of users) {
      saveDoc.push({
        idUser: user._id,
        idNotice: value._id,
        publishArea: value.publishArea,
      });
    }
    await app.model.SysNoticeRead.create(saveDoc);
    next();
  });

  schema.virtual('createdTime').get(function() {
    return moment(this.createdAt).format('YYYY-MM-DD HH:mm:ss');
  });

  return app.mongooseDB.get('default').model(model, schema, model);
};
