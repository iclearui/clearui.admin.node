'use strict';

module.exports = app => {

  const { router, controller, io } = app;

  router.get('/', controller.home.index);

  // 数据模型API
  router.get('/api/model/:model', controller.api.model.get);
  router.get('/api/model/:model/:id', controller.api.model.getById);
  router.post('/api/modelByPost/:model', controller.api.model.getByPost);
  router.post('/api/model/:model', controller.api.model.post);
  router.put('/api/model/:model/:id', controller.api.model.update);
  router.patch('/api/model/:model/:id', controller.api.model.update);
  router.delete('/api/model/:model/:id', controller.api.model.destroy);

  // 认证系统API

  router.post('/v1/authority/login', controller.v1.authority.login);
  router.post('/v1/authority/register', controller.v1.authority.register);
  router.post('/v1/authority/changePwd', controller.v1.authority.changePwd);

};
