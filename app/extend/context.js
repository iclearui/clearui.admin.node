'use strict';

module.exports = {
    get query() {
        return this.GeneratorQuery(this.request.query);
    },
    get collection(){
        return this.params.model?this.model[this.helper.humps.pascalize(this.params.model)]:'undefined'
    },
    GeneratorQuery(data){
        const query = {};
        query.filter = data.filter === undefined ? {} : JSON.parse(data.filter);
        if (data.like) {
            query.filter.$or = [];
            for (const key of data.likeBy.split(',')) {
                query.filter.$or.push({[key]: new RegExp(data.like, 'i')});
            }
        }
        query.order = data.order === undefined ? '_id' : data.order + ' _id';
        query.limit = data.limit === undefined ? 0 : parseInt(data.limit);
        query.skip = data.page === undefined ? 0 : (parseInt(data.page) - 1) * (data.limit === undefined ? 0 : parseInt(data.limit));
        query.security = data.security === undefined ? 4 : parseInt(data.security);
        query.populate=data.populate;
        return query;
    }
};
