'use strict';

const Controller = require('egg').Controller;

class ModelCtrl extends Controller {
    constructor(ctx) {
        super(ctx);
    }

    async get() {
        const {ctx, service} = this;
        const error = {
            code: '0',
        };
        const count = await ctx.collection.countDocuments(ctx.query.filter);
        let records = await ctx.collection.find(ctx.query.filter)
            .sort(ctx.query.order)
            .skip(ctx.query.skip)
            .limit(ctx.query.limit)
            .catch(e => {
                if (e) {
                    error.code = e.code;
                    error.message = e.message;
                }
                console.log(e);
            });
        if (ctx.query.populate) {
            records = await ctx.collection.deepPopulate(records,ctx.query.populate.split(','))
                .catch(e => {
                    if (e) {
                        error.code = e.code;
                        error.message = e.message;
                    }
                    console.log(e);
                });
        }
        ctx.body = error.code === '0' ? {error, count, records} : {error};
    }

    async getById() {
        const error = {
            code: '0',
        };
        const {ctx, service} = this;
        let records = await ctx.collection.find({_id: {$in: ctx.params.id.split(',')}})
            .catch(e => {
                if (e) {
                    error.code = e.code;
                    error.message = e.message;
                }
                console.log(e);
            });

        if (ctx.query.populate) {
            records = await ctx.collection.deepPopulate(records,ctx.query.populate.split(','))
                .catch(e => {
                    if (e) {
                        error.code = e.code;
                        error.message = e.message;
                    }
                    console.log(e);
                });
        }

        ctx.body = error.code === '0' ? {
            error,
            records,
        } : {
            error,
        };
    }

    async getByPost() {
        const {ctx, service} = this;

        const error = {code: '0'};

        const {filter, order, limit, skip, populate} = ctx.GeneratorQuery(ctx.request.body);

        const count = await ctx.collection.countDocuments(filter);

        let records = await ctx.collection.find(filter)
            .sort(order)
            .skip(skip)
            .limit(limit)
            .catch(e => {
                if (e) {
                    error.code = e.code;
                    error.message = e.message;
                }
                console.log(e);
            });

        if (ctx.request.body.populate) {
            records = await ctx.collection.deepPopulate(records,ctx.request.body.populate.split(','))
                .catch(e => {
                    if (e) {
                        error.code = e.code;
                        error.message = e.message;
                    }
                    console.log(e);
                });
        }
        ctx.body = error.code === '0' ? {error, count, records} : {error};
    }

    async post() {
        const {ctx, service} = this;
        const error = {
            code: '0',
        };
        let records = [];
        if (Array.isArray(ctx.request.body)) {
            for (const b of ctx.request.body) {
                delete b.updatedAt;
                delete b.createdAt;
                const record = await ctx.collection.create(b).catch(e => {
                    if (e) {
                        error.code = e.code;
                        error.message = e.message;
                    }
                    console.log(e);
                });
                records.push(record);
            }
        } else {
            delete ctx.request.body.updatedAt;
            delete ctx.request.body.createdAt;
            records = await ctx.collection.create(ctx.request.body).catch(e => {
                if (e) {
                    error.code = e.code;
                    error.message = e.message;
                }
                console.log(e);
            });
        }

        ctx.body = error.code === '0' ? {
            error,
            records,
        } : {
            error,
        };
    }

    async update() {
        const error = {
            code: '0',
        };
        const {ctx, service} = this;

        let records;

        const exist = await ctx.collection.findOne({_id: ctx.params.id});
        if (exist) {
            if ((new Date(exist.updatedAt)).toString() === (new Date(ctx.request.body.updatedAt)).toString() || !ctx.request.body.updatedAt) {
                delete ctx.request.body.updatedAt;
                records = await ctx.collection.update({_id: ctx.params.id}, ctx.request.body)
                    .catch(e => {
                        if (e) {
                            error.code = e.code;
                            error.message = e.message;
                        }
                        console.log(e);
                    });
            } else {
                error.code = '909';
                error.message = '当前数据已被修改，请刷新数据后重试！';
            }
        } else {
            error.code = '904';
            error.message = '当前数据已删除！';
        }

        ctx.body = error.code === '0' ? {
            error,
            records,
        } : {
            error,
        };
    }

    async destroy() {
        const error = {
            code: '0',
        };
        const {ctx, service} = this;
        const records = await ctx.collection.remove({_id: {$in: ctx.params.id.split(',')}})
            .catch(e => {
                if (e) {
                    error.code = e.code;
                    error.message = e.message;
                }
                console.log(e);
            });

        ctx.body = error.code === '0' ? {
            error,
            records,
        } : {
            error,
        };
    }

}

module.exports = ModelCtrl;
