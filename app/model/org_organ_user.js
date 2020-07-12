'use strict';

const mongoose = require('mongoose');

module.exports = app => {
  const ctx = app.createAnonymousContext();
  const model = require('path')
    .basename(__filename, '.js');
  const attributes = {
    idUser: {
      name: '主表id',
      type: mongoose.Schema.ObjectId,
      ref: 'sys_user',
    },
    userType: {
      name: '账户类型',
      type: String,
      default: 'User',
    },
    name: {
      name: '姓名',
      type: String,
    },
    workNo: {
      name: '工号',
      type: String,
    },
    sex: {
      name: '性别',
      type: String,
    },
    idBranch: {
      name: '部门的id',
      type: mongoose.Schema.ObjectId,
      ref: 'org_branch',
    },
    idType: {
      name: '类型的id',
      type: String,
    },
    idNo: {
      name: '',
      type: String,
    },
    nativePlace: {
      name: '出生地',
      type: Array,
    },
    address: {
      name: '居住地址',
      type: String,
    },
    permanentAddress: {
      name: '户口所在地',
      type: String,
    },
    familyAddress: {
      name: '家庭住址',
      type: String,
    },
    job: {
      name: '职位',
      type: String,
    },
    polity: {
      name: '政治面貌',
      type: String,
    },
    telephone: {
      name: '电话',
      type: String,
    },
    email: {
      name: '邮箱',
      type: String,
    },
    birthday: {
      name: '出生日期',
      type: String,
    },
    nationality: {
      name: '民族',
      type: String,
    },
    personalTelephone: {
      name: '本人联系电话',
      type: String,
    },
    familyTelephone: {
      name: '家庭联系电话',
      type: String,
    },
    personalShortTelephone: {
      name: '个人联系短号',
      type: String,
    },
    emergencyContactPerson: {
      name: '紧急联系人',
      type: String,
    },
    emergencyContactTelephone: {
      name: '紧急联系人电话',
      type: String,
    },
    maritalStatus: {
      name: '婚姻状况',
      type: String,
    },
    post: {
      name: '职务',
      type: String,
    },
    familyInfo: [ new mongoose.Schema({
      call: {
        name: '称呼',
        type: String,
      },
      name: {
        name: '姓名',
        type: String,
      },
      age: {
        name: '年龄',
        type: String,
      },
      company: {
        name: '工作单位',
        type: String,
      },
    }) ],
    workInfo: [
      new mongoose.Schema({
        startTime: {
          name: '起始时间',
          type: String,
        },
        company: {
          name: '单位名称',
          type: String,
        },
        post: {
          name: '岗位',
          type: String,
        },
        job: {
          name: '职务',
          type: String,
        },
      }),
    ],

    isPurchase: {
      type: Boolean,
      default: false,
    },
    isSales: {
      type: Boolean,
      default: false,
    },
    isWarehouse: {
      type: Boolean,
      default: false,
    },

  };


  const schema = app.MongooseSchema(model, attributes);

  //
  schema.post('save', async value => {
    ctx.service.common.changeUserDefaultBusinessRole(value.idOrgan, value.idUser, { isSales: value.isSales, isPurchase: value.isPurchase });
  });
  schema.pre('update', async function() {
    const result = await app.model.OrgOrganUser.findOne({ _id: this._conditions._id }).lean();
    if (result && result.idOrgan) {
      ctx.service.common.changeUserDefaultBusinessRole(result.idOrgan, result.idUser, this._update);
    }
  });


  return app.mongooseDB.get('default')
    .model(model, schema, model);
};
