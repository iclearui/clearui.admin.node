'use strict';

const crypto = require('crypto');
const mongoose = require('mongoose');

const Controller = require('egg').Controller;

class CloudAuth extends Controller {
  constructor(ctx) {
    super(ctx);
    this.query = this.ctx.request.query;
    this.body = this.ctx.request.body;
  }

  async login() {
    const error = {
      code: '0',
    };
    if (!this.body.userCode) {
      error.code = '20201';
      error.message = 'param userCode missing';
    }
    if (!this.body.userPwd) {
      error.code = '20202';
      error.message = 'param userPwd missing';
    }
    let record = await this.ctx.model.SysUser.findOne({ userCode: this.body.userCode })
      .catch(e => {
        if (e) {
          error.code = '700';
        }
        console.log(e);
      });
    if (!record) {
      error.code = '800';
      error.message = '抱歉，该用户不存在，请联系管理员！';
    } else if (record.userPwd !== crypto.createHash('md5').update(this.body.userPwd).digest('base64')) {
      error.code = '801';
      error.message = '抱歉！密码错误！';
    } else if (record.__s === 0) {
      error.code = '802';
      error.message = '抱歉，该用户已停用，请联系管理员！';
    }

    this.ctx.body = error.code === '0' ? {
      error,
      record,
    } : {
      error,
    };
  }

  async register() {
    const error = {
      code: '0',
    };
    let record;
    const existsUser = await this.ctx.model.SysUser.find({ userCode: this.body.userCode })
      .catch(e => {
        if (e) {
          error.code = '700';
        }
        console.log(e);
      });
    if (existsUser.length > 0) {
      error.code = '900';
      error.message = '用户已注册，请更换手机号重新注册！';
    } else {
      record = await this.ctx.model.SysUser.create({
        userCode: this.body.userCode,
        userName: this.body.userName,
        userPwd: crypto.createHash('md5')
          .update(this.body.userPwd)
          .digest('base64'),
      })
        .catch(e => {
          if (e) {
            error.code = '700';
          }
          console.log(e);
        });
    }

    this.ctx.body = error.code === '0' ? {
      error,
      record,
    } : {
      error,
    };
  }

  async changePwd() {
    const error = {
      code: '0',
    };
    const rows = await this.ctx.model.SysUser.update({ userCode: this.body.userCode }, {
      userPwd: crypto.createHash('md5').update(this.body.userPwdNew).digest('base64'),
    })
      .catch(e => {
        if (e) {
          error.code = '700';
      }
        console.log(e);
      });

    this.ctx.body = error.code === '0' ? {
      error,
      rows,
    } : {
      error,
    };
  }
}

module.exports = CloudAuth;
