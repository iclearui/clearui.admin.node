'use strict';

const Controller = require('egg').Controller;

class authority extends Controller {
  constructor(ctx) {
    super(ctx);
    this.query = this.ctx.request.query;
    this.body = this.ctx.request.body;
  }

  async setAdmin() {
    const error = {
      code: '0',
    };
    if (!this.body.idOrgan) {
      error.code = '20201';
      error.message = 'param idOrgan missing';
    }
    if (!this.body.idUser) {
      error.code = '20202';
      error.message = 'param idUser missing';
    }
    await this.ctx.model.OrgOrganUser.update({ idOrgan: this.body.idOrgan, userType: 'Admin' }, { userType: 'User' })
      .catch(e => {
        if (e) {
          error.code = '700';
        }
        console.log(e);
      });

    await this.ctx.model.OrgOrganUser.update({ idOrgan: this.body.idOrgan, idUser: this.body.idUser }, { $set: { userType: 'Admin' } }, { upsert: true })
      .catch(e => {
        if (e) {
          error.code = '700';
        }
        console.log(e);
      });

    this.ctx.body = error.code === '0' ? {
      error,
    } : {
      error,
    };
  }

  async setApplication() {
    const error = {
      code: '0',
    };
    if (!this.body.idOrgan) {
      error.code = '20201';
      error.message = 'param idOrgan missing';
    }
    const applications = await this.ctx.model.CdpApplication.find();

    await this.ctx.model.OrgApplication.remove();

    for (const app of applications) {
      await this.ctx.model.OrgApplication.create({
        idApplication: app._id,
        idOrgan: this.body.idOrgan,
      });
    }

    this.ctx.body = error.code === '0' ? {
      error,
    } : {
      error,
    };
  }
}

module.exports = authority;
