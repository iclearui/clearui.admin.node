'use strict';

module.exports = app => {
  const model = require('path').basename(__filename, '.js');
  const attributes = {
    roleCode: String,
    roleName: String,
  };

  const schema = app.MongooseSchema(model, attributes);

  return app.mongooseDB.get('default').model(model, schema, model);
};
