'use strict';

const mongoose = require('mongoose');

module.exports = app => {
  const model = require('path').basename(__filename, '.js');
  const attributes = {
    desc: {
      type: String,
    },
    idFiles: [ new mongoose.Schema({
      idFile: {
        type: mongoose.Schema.ObjectId,
        ref: 'sys_file',
      },
    }) ],
  };

  const schema = app.MongooseSchema(model, attributes);

  return app.mongooseDB.get('default').model(model, schema, model);
};
