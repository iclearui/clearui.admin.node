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

    // // 认证系统API
    //
    // router.post('/v4/authority/login', controller.v4.authority.login);
    // router.post('/v4/authority/register', controller.v4.authority.register);
    // router.post('/v4/authority/changePwd', controller.v4.authority.changePwd);
    //
    // router.get('/v4/authority/application', controller.v4.authority.getUserApplication);
    // router.get('/v4/authority/menu', controller.v4.authority.getUserMenu);
    // router.get('/v4/authority/button', controller.v4.authority.getUserButton);// 返回按钮权限(组织)
    // router.get('/v4/authority/organ', controller.v4.authority.getUserOrgan);
    // router.get('/v4/authority/security', controller.v4.authority.getUserSecurity);// 返回数据权限
    // router.get('/v4/authority/template', controller.v4.authority.getUserTemplate);// 返回按钮权限(组织)
    // router.get('/v4/authority/params', controller.v4.authority.getApplicationParams);
};
