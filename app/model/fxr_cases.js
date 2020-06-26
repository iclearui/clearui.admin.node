'use strict';

module.exports = app => {
  const model = require('path').basename(__filename, '.js');
  const attributes = {
    caseCode: {
      type: String,
      unique: true,
    },
    caseName: {
      type: String,
    },
    caseType: {
      type: String,
    },
  };

  const schema = app.MongooseSchema(model, attributes, false);

  return app.mongooseDB.get('default').model(model, schema, model);
};
