'use strict';

module.exports = app => {
  const model = require('path').basename(__filename, '.js');
  const attributes = {
    userCode: {
      name: '手机号码',
      type: String,
      unique: true,
    },
    userName: {
      name: '姓名',
      type: String,
    },
    userPwd: {
      name: '密码',
      type: String,
    },
    avatarColor: {
      name: '头像背景',
      type: String,
    },
    avatar: {
      name: '头像',
      type: String,
    },
  };


  const schema = app.MongooseSchema(model, attributes, false);

  schema.post('validate', async (value, next) => {
    const color = [ '#F00', '#F60', '#FF0', '#0C0', '#699', '#06C', '#909' ];
    value.avatarColor = color[Math.floor(Math.random() * 7)];
    next();
  });
  return app.mongooseDB.get('default').model(model, schema, model);
};
