(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2c03ad28","chunk-2d0e6713","chunk-2d225029","chunk-2d0d3524"],{"5bef":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a-modal",{attrs:{title:"专家评审",visible:e.value,width:"50%"},on:{ok:e.handleOk,cancel:e.handleCancel}},[r("a-form-model",{ref:"form",attrs:{labelAlign:"left",model:e.form.model,rules:e.form.rules,"label-col":e.form.labelCol,"wrapper-col":e.form.wrapperCol,disabled:"view"===e.value}},[r("a-row",{attrs:{gutter:12}},[r("a-col",{attrs:{span:24}},[r("a-form-model-item",{attrs:{label:"指定律师"}},[r("a-select",{attrs:{showSearch:"",placeholder:"选择成员",filterOption:!1,notFoundContent:e.users.loading?void 0:null},on:{search:e.onSearchUser},model:{value:e.form.model.idLawyer,callback:function(t){e.$set(e.form.model,"idLawyer",t)},expression:"form.model.idLawyer"}},[e.users.loading?r("a-spin",{attrs:{slot:"notFoundContent",size:"small"},slot:"notFoundContent"}):e._e(),e._l(e.users.data,(function(t){return r("a-select-option",{key:t._id},[e._v(e._s(t.userCode+" "+t.userName))])}))],2)],1)],1)],1)],1)],1)},o=[],l=(r("96cf"),r("1da1")),s={name:"signup",props:{value:{type:Boolean,required:!1,default:!1},uid:{type:[String,Object]}},data:function(){return{users:{loading:!1,data:[]},form:{labelCol:{span:5},wrapperCol:{span:19},model:{},rules:{type:[{required:!0,message:"必填",trigger:"blur"}]}}}},methods:{onSearchUser:function(e){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t.users.loading=!0,r.next=3,t.$helper.model("sys_user").get({order:"_id",like:e,likeBy:"userCode,userName"});case 3:t.users.data=r.sent.records,t.users.loading=!1;case 5:case"end":return r.stop()}}),r)})))()},handleOk:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.form.model.__s=4,e.$forceUpdate(),t.next=4,e.$helper.model("fxe_dispute").patch(e.uid,e.form.model);case 4:e.$emit("input",!1),e.$emit("refresh");case 6:case"end":return t.stop()}}),t)})))()},handleCancel:function(){this.$emit("input",!1),this.$emit("refresh")}}},n=s,i=r("2877"),d=Object(i["a"])(n,a,o,!1,null,"8fdb44a4",null);t["default"]=d.exports},"7a5f":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a-card",[e.menu.buttons?r("c-button-group",{attrs:{slot:"title",buttons:e.menu.buttons.edit,showSave:"view"!==e.value,showBack:""},on:{click:e.click},slot:"title"}):e._e(),r("a-row",{staticStyle:{"margin-bottom":"12px"},attrs:{type:"flex",justify:"space-between"}},[-1===e.form.model.__s?r("a-tag",{attrs:{color:"pink"}},[e._v(" 已拒绝 ")]):0===e.form.model.__s?r("a-tag",{attrs:{color:"red"}},[e._v(" 待补齐资料 ")]):1===e.form.model.__s?r("a-tag",{attrs:{color:"orange"}},[e._v(" 待内部评审 ")]):2===e.form.model.__s?r("a-tag",{attrs:{color:"green"}},[e._v(" 待专家评审 ")]):3===e.form.model.__s?r("a-tag",{attrs:{color:"blue"}},[e._v(" 待签约 ")]):4===e.form.model.__s?r("a-tag",{attrs:{color:"purple"}},[e._v(" 已签约 ")]):e._e(),r("div",[e._v("承办人： "),4===e.form.model.__s?r("a-tag",{attrs:{color:"purple"}},[e._v(" "+e._s(e.form.model.idLawyer.userName)+" ")]):e._e()],1)],1),r("a-form-model",{ref:"form",attrs:{labelAlign:"left",model:e.form.model,rules:e.form.rules,"label-col":e.form.labelCol,"wrapper-col":e.form.wrapperCol,disabled:"view"===e.value}},[r("a-row",{attrs:{gutter:12}},[r("a-col",{attrs:{span:6}},[r("a-form-model-item",{attrs:{label:"标识编码"}},[r("a-input",{attrs:{placeholder:"标识编码",disabled:"view"===e.value},model:{value:e.form.model.code,callback:function(t){e.$set(e.form.model,"code",t)},expression:"form.model.code"}})],1)],1),r("a-col",{attrs:{span:6}},[r("a-form-model-item",{attrs:{label:"委托人"}},[r("a-input",{attrs:{placeholder:"委托人",disabled:"view"===e.value},model:{value:e.form.model.creditor,callback:function(t){e.$set(e.form.model,"creditor",t)},expression:"form.model.creditor"}})],1)],1),r("a-col",{attrs:{span:6}},[r("a-form-model-item",{attrs:{label:"委托人属性"}},[r("a-input",{attrs:{placeholder:"委托人属性",disabled:"view"===e.value},model:{value:e.form.model.creditorType,callback:function(t){e.$set(e.form.model,"creditorType",t)},expression:"form.model.creditorType"}})],1)],1),r("a-col",{attrs:{span:6}},[r("a-form-model-item",{attrs:{label:"对方名称"}},[r("a-input",{attrs:{placeholder:"对方名称",disabled:"view"===e.value},model:{value:e.form.model.debtor,callback:function(t){e.$set(e.form.model,"debtor",t)},expression:"form.model.debtor"}})],1)],1),r("a-col",{attrs:{span:6}},[r("a-form-model-item",{attrs:{label:"联系方式"}},[r("a-input",{attrs:{placeholder:"联系方式",disabled:"view"===e.value},model:{value:e.form.model.contract,callback:function(t){e.$set(e.form.model,"contract",t)},expression:"form.model.contract"}})],1)],1),r("a-col",{attrs:{span:6}},[r("a-form-model-item",{attrs:{label:"联系地址"}},[r("a-input",{attrs:{placeholder:"联系地址",disabled:"view"===e.value},model:{value:e.form.model.address,callback:function(t){e.$set(e.form.model,"address",t)},expression:"form.model.address"}})],1)],1),r("a-col",{attrs:{span:6}},[r("a-form-model-item",{attrs:{label:"纠纷类型"}},[r("a-input",{attrs:{placeholder:"纠纷类型",disabled:"view"===e.value},model:{value:e.form.model.disputeType,callback:function(t){e.$set(e.form.model,"disputeType",t)},expression:"form.model.disputeType"}})],1)],1),r("a-col",{attrs:{span:6}},[r("a-form-model-item",{attrs:{label:"涉案金额"}},[r("a-input",{attrs:{placeholder:"涉案金额",disabled:"view"===e.value},model:{value:e.form.model.caseMoney,callback:function(t){e.$set(e.form.model,"caseMoney",t)},expression:"form.model.caseMoney"}})],1)],1),r("a-col",{attrs:{span:6}},[r("a-form-model-item",{attrs:{label:"目标金额"}},[r("a-input",{attrs:{placeholder:"目标金额",disabled:"view"===e.value},model:{value:e.form.model.objectMoney,callback:function(t){e.$set(e.form.model,"objectMoney",t)},expression:"form.model.objectMoney"}})],1)],1),r("a-col",{attrs:{span:6}},[r("a-form-model-item",{attrs:{label:"案情状态"}},[r("a-input",{attrs:{placeholder:"案情状态",disabled:"view"===e.value},model:{value:e.form.model.caseState,callback:function(t){e.$set(e.form.model,"caseState",t)},expression:"form.model.caseState"}})],1)],1),r("a-col",{attrs:{span:6}},[r("a-form-model-item",{attrs:{label:"案情阶段"}},[r("a-input",{attrs:{placeholder:"案情阶段",disabled:"view"===e.value},model:{value:e.form.model.caseStage,callback:function(t){e.$set(e.form.model,"caseStage",t)},expression:"form.model.caseStage"}})],1)],1),r("a-col",{attrs:{span:24}},[r("a-form-model-item",{attrs:{label:"简介"}},[r("a-textarea",{attrs:{placeholder:"简介","allow-clear":"",disabled:"view"===e.value},model:{value:e.form.model.desc,callback:function(t){e.$set(e.form.model,"desc",t)},expression:"form.model.desc"}})],1)],1),r("a-col",{attrs:{span:24}},["modify"===e.value?r("a-upload-dragger",{attrs:{name:"file",multiple:!0,action:e.$url.file.upload,"default-file-list":e.defaultFileList,disabled:"view"===e.value},on:{change:e.handleChange}},[r("p",{staticClass:"ant-upload-drag-icon"},[r("a-icon",{attrs:{type:"inbox"}})],1),r("p",{staticClass:"ant-upload-text"},[e._v(" 单击或拖动文件到此区域以上传 ")])]):r("a-form-model-item",{attrs:{label:"附件下载"}},e._l(e.defaultFileList,(function(t){return r("a",{key:t.uid,attrs:{href:t.url}},[e._v(" "+e._s(t.name)+" ")])})),0)],1)],1)],1),r("a-divider"),r("a-tabs",{attrs:{"default-active-key":"1"}},[r("a-tab-pane",{key:"1",attrs:{tab:"内部评审"}},[e._v(e._s(e.form.model.iAdvise))]),r("a-tab-pane",{key:"2",attrs:{tab:"专家评审","force-render":""}},[e._v(e._s(e.form.model.oAdvise))])],1),r("i-verify",{attrs:{uid:e.form.model._id},on:{refresh:function(t){return e.loadData(e.form.model._id)}},model:{value:e.buttons.iverify,callback:function(t){e.$set(e.buttons,"iverify",t)},expression:"buttons.iverify"}}),r("o-verify",{attrs:{uid:e.form.model._id},on:{refresh:function(t){return e.loadData(e.form.model._id)}},model:{value:e.buttons.overify,callback:function(t){e.$set(e.buttons,"overify",t)},expression:"buttons.overify"}}),r("sign-up",{attrs:{uid:e.form.model._id},on:{refresh:function(t){return e.loadData(e.form.model._id)}},model:{value:e.buttons.signup,callback:function(t){e.$set(e.buttons,"signup",t)},expression:"buttons.signup"}})],1)},o=[],l=(r("c740"),r("d81d"),r("a434"),r("b0c0"),r("b85c")),s=(r("96cf"),r("1da1")),n=r("5530"),i=r("2f62"),d=r("9985"),u=r("e327"),c=r("5bef"),m={name:"edit",components:{IVerify:d["default"],OVerify:u["default"],SignUp:c["default"]},props:{value:{type:String},uid:{type:[String,Object]}},data:function(){return{buttons:{},defaultFileList:[],type:["买卖合同纠纷","金融借贷纠纷","建设工程合同纠纷","民间借贷纠纷","知识产权纠纷","其他民商事纠纷"],creditorType:["债权人","债务人"],state:["已抵押","已保全","已查封","其他"],stage:["未起诉","一审中","二审中","再审中","商事仲裁中","其他"],form:{labelCol:{span:5},wrapperCol:{span:19},model:{idFiles:[]},rules:{type:[{required:!0,message:"必填",trigger:"blur"}]}}}},computed:Object(n["a"])({},Object(i["c"])(["menu"])),watch:{value:function(e){this.$refs.form.resetFields(),"create"!==e&&this.form.model._id&&this.loadData(this.form.model._id)},uid:function(e){e&&this.loadData(e)}},mounted:function(){this.uid&&(this.$refs.form.resetFields(),this.loadData(this.uid))},methods:{click:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:r.t0=e,r.next="modify"===r.t0?3:"remove"===r.t0?5:"back"===r.t0?8:"conserve"===r.t0?10:"cancel"===r.t0?13:"iverify"===r.t0?18:"overify"===r.t0?24:"signup"===r.t0?30:34;break;case 3:return t.$emit("input","modify"),r.abrupt("break",35);case 5:return r.next=7,t.remove(t.form.model);case 7:return r.abrupt("break",35);case 8:return t.backList(),r.abrupt("break",35);case 10:return r.next=12,t.conserve(t.form.model);case 12:return r.abrupt("break",35);case 13:if(!t.uid){r.next=16;break}return t.$emit("input","view"),r.abrupt("return");case 16:return t.backList(),r.abrupt("break",35);case 18:if(1===t.form.model.__s){r.next=21;break}return t.$message.error("案件前置执行状态不正确！无法执行此操作"),r.abrupt("return");case 21:return t.buttons.iverify=!0,t.$forceUpdate(),r.abrupt("break",35);case 24:if(2===t.form.model.__s){r.next=27;break}return t.$message.error("案件前置执行状态不正确！无法执行此操作"),r.abrupt("return");case 27:return t.buttons.overify=!0,t.$forceUpdate(),r.abrupt("break",35);case 30:return 3!==t.form.model.__s&&t.$message.error("案件前置执行状态不正确！无法执行此操作"),t.buttons.signup=!0,t.$forceUpdate(),r.abrupt("break",35);case 34:return r.abrupt("break",35);case 35:case"end":return r.stop()}}),r)})))()},backList:function(){this.form.model={},this.$emit("input","")},handleChange:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var a,o,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:r.t0=e.file.status,r.next="uploading"===r.t0?3:"removed"===r.t0?4:"error"===r.t0?6:"done"===r.t0?8:12;break;case 3:return r.abrupt("break",13);case 4:return t.form.model.idFiles.splice(t.form.model.idFiles.map((function(e){return e.idFile})).findIndex((function(t){return t===e.file.response?e.file.response.records[0]._id:e.file.uid})),1),r.abrupt("break",13);case 6:return t.$message.error("".concat(e.file.name," 文件上传失败！")),r.abrupt("break",13);case 8:return e.file.url=t.$url.file.preview+e.file.response.records[0]._id,t.form.model.idFiles.push({idFile:e.file.response.records[0]._id}),t.$message.success("".concat(e.file.name," 文件上传成功！")),r.abrupt("break",13);case 12:return r.abrupt("break",13);case 13:a=Object(l["a"])(e.fileList);try{for(a.s();!(o=a.n()).done;)s=o.value,s.response&&(s.url=t.$url.file.preview+s.response.records[0]._id)}catch(n){a.e(n)}finally{a.f()}case 15:case"end":return r.stop()}}),r)})))()},loadData:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var a,o,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$helper.model("fxe_dispute").getByID(e,{params:{populate:"idFiles.idFile"}});case 2:t.form.model=r.sent.records[0],t.defaultFileList=[],a=Object(l["a"])(t.form.model.idFiles);try{for(a.s();!(o=a.n()).done;)s=o.value,t.defaultFileList.push({uid:s.idFile._id,status:"done",name:s.idFile.fileName,url:t.$url.file.preview+s.idFile._id})}catch(n){a.e(n)}finally{a.f()}case 6:case"end":return r.stop()}}),r)})))()},conserve:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:e.businessType="MBDD",t.$refs.form.validate(function(){var r=Object(s["a"])(regeneratorRuntime.mark((function r(a){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(!a){r.next=17;break}if(!e._id){r.next=8;break}return r.next=4,t.$helper.model("fxe_dispute").put(e._id,e);case 4:return r.next=6,t.loadData(e._id);case 6:r.next=14;break;case 8:return r.t0=t,r.next=11,t.$helper.model("fxe_dispute").post(e);case 11:return r.t1=r.sent.records._id,r.next=14,r.t0.loadData.call(r.t0,r.t1);case 14:t.$emit("input","view"),r.next=20;break;case 17:t.$message.error("数据有误，请检查后重新提交！！！"),t.loading=!0,setTimeout((function(){t.loading=!1}),1e3);case 20:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}());case 2:case"end":return r.stop()}}),r)})))()},remove:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$helper.model("fxe_dispute").delete(e._id);case 2:t.$message.success("数据删除成功"),t.backList();case 4:case"end":return r.stop()}}),r)})))()}}},f=m,p=r("2877"),b=Object(p["a"])(f,a,o,!1,null,"462a9e8d",null);t["default"]=b.exports},9985:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a-modal",{attrs:{title:"内部评审",visible:e.value,width:"50%"},on:{ok:e.handleOk,cancel:e.handleCancel}},[r("a-form-model",{ref:"form",attrs:{labelAlign:"left",model:e.form.model,rules:e.form.rules,"label-col":e.form.labelCol,"wrapper-col":e.form.wrapperCol,disabled:"view"===e.value}},[r("a-row",{attrs:{gutter:12}},[r("a-col",{attrs:{span:24}},[r("a-form-model-item",{attrs:{label:"评审通过"}},[r("a-radio-group",{attrs:{disabled:"view"===e.value},model:{value:e.form.model.__s,callback:function(t){e.$set(e.form.model,"__s",t)},expression:"form.model.__s"}},[r("a-radio",{attrs:{value:"2"}},[e._v("是")]),r("a-radio",{attrs:{value:"0"}},[e._v("否")])],1)],1)],1),r("a-col",{attrs:{span:24}},[r("a-form-model-item",{attrs:{label:"评审意见"}},[r("a-textarea",{attrs:{placeholder:"评审意见","allow-clear":"",disabled:"view"===e.value},model:{value:e.form.model.iAdvise,callback:function(t){e.$set(e.form.model,"iAdvise",t)},expression:"form.model.iAdvise"}})],1)],1)],1)],1)],1)},o=[],l=(r("96cf"),r("1da1")),s={name:"iverify",props:{value:{type:Boolean,required:!1,default:!1},uid:{type:[String,Object]}},data:function(){return{form:{labelCol:{span:5},wrapperCol:{span:19},model:{},rules:{type:[{required:!0,message:"必填",trigger:"blur"}]}}}},methods:{handleOk:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$helper.model("fxe_dispute").patch(e.uid,e.form.model);case 2:e.$emit("input",!1),e.$emit("refresh");case 4:case"end":return t.stop()}}),t)})))()},handleCancel:function(){this.$emit("input",!1),this.$emit("refresh")}}},n=s,i=r("2877"),d=Object(i["a"])(n,a,o,!1,null,"0e8563dc",null);t["default"]=d.exports},e327:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a-modal",{attrs:{title:"专家评审",visible:e.value,width:"50%"},on:{ok:e.handleOk,cancel:e.handleCancel}},[r("a-form-model",{ref:"form",attrs:{labelAlign:"left",model:e.form.model,rules:e.form.rules,"label-col":e.form.labelCol,"wrapper-col":e.form.wrapperCol,disabled:"view"===e.value}},[r("a-row",{attrs:{gutter:12}},[r("a-col",{attrs:{span:24}},[r("a-form-model-item",{attrs:{label:"评审意见"}},[r("a-textarea",{attrs:{placeholder:"评审意见","allow-clear":"",disabled:"view"===e.value},model:{value:e.form.model.oAdvise,callback:function(t){e.$set(e.form.model,"oAdvise",t)},expression:"form.model.oAdvise"}})],1)],1)],1)],1)],1)},o=[],l=(r("96cf"),r("1da1")),s={name:"oVerify",props:{value:{type:Boolean,required:!1,default:!1},uid:{type:[String,Object]}},data:function(){return{form:{labelCol:{span:5},wrapperCol:{span:19},model:{},rules:{type:[{required:!0,message:"必填",trigger:"blur"}]}}}},methods:{handleOk:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.form.model.__s=3,t.next=3,e.$helper.model("fxe_dispute").patch(e.uid,e.form.model);case 3:e.$emit("input",!1),e.$emit("refresh");case 5:case"end":return t.stop()}}),t)})))()},handleCancel:function(){this.$emit("input",!1),this.$emit("refresh")}}},n=s,i=r("2877"),d=Object(i["a"])(n,a,o,!1,null,"7494ea87",null);t["default"]=d.exports}}]);