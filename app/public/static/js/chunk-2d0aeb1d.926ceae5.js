(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0aeb1d"],{"0ac9":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a-card",[e.menu.buttons?r("c-button-group",{attrs:{slot:"title",buttons:e.menu.buttons.edit,showSave:"view"!==e.value,showBack:""},on:{click:e.click},slot:"title"}):e._e(),r("a-form-model",{ref:"form",attrs:{labelAlign:"left",model:e.form.model,rules:e.form.rules,"label-col":e.form.labelCol,"wrapper-col":e.form.wrapperCol,disabled:"view"===e.value}},[r("a-row",{attrs:{gutter:12}},[r("a-col",{attrs:{span:12}},[r("a-form-model-item",{attrs:{label:"标识编码"}},[r("a-input",{attrs:{placeholder:"标识编码",disabled:"view"===e.value},model:{value:e.form.model.code,callback:function(t){e.$set(e.form.model,"code",t)},expression:"form.model.code"}})],1)],1),r("a-col",{attrs:{span:12}},[r("a-form-model-item",{attrs:{label:"业务名称"}},[r("a-input",{attrs:{placeholder:"业务名称",disabled:"view"===e.value},model:{value:e.form.model.name,callback:function(t){e.$set(e.form.model,"name",t)},expression:"form.model.name"}})],1)],1),r("a-col",{attrs:{span:24}},[r("a-form-model-item",{attrs:{label:"问题描述"}},[r("a-textarea",{attrs:{placeholder:"问题描述","allow-clear":"",disabled:"view"===e.value},model:{value:e.form.model.desc,callback:function(t){e.$set(e.form.model,"desc",t)},expression:"form.model.desc"}})],1)],1),r("a-col",{attrs:{span:24}},["modify"===e.value?r("a-upload-dragger",{attrs:{name:"file",multiple:!0,action:e.$url.file.upload,"default-file-list":e.defaultFileList,disabled:"view"===e.value},on:{change:e.handleChange}},[r("p",{staticClass:"ant-upload-drag-icon"},[r("a-icon",{attrs:{type:"inbox"}})],1),r("p",{staticClass:"ant-upload-text"},[e._v(" 单击或拖动文件到此区域以上传 ")])]):r("a-form-model-item",{attrs:{label:"附件下载"}},e._l(e.defaultFileList,(function(t){return r("a",{key:t.uid,attrs:{href:t.url}},[e._v(" "+e._s(t.name)+" ")])})),0)],1)],1)],1)],1)},n=[],i=(r("c740"),r("d81d"),r("a434"),r("b0c0"),r("b85c")),s=(r("96cf"),r("1da1")),o=r("5530"),l=r("2f62"),u={name:"edit",props:{value:{type:String},uid:{type:[String,Object]}},data:function(){return{defaultFileList:[],form:{labelCol:{span:5},wrapperCol:{span:19},model:{idFiles:[]},rules:{type:[{required:!0,message:"必填",trigger:"blur"}]}}}},computed:Object(o["a"])({},Object(l["c"])(["menu"])),watch:{value:function(e){this.$refs.form.resetFields(),"create"!==e&&this.form.model._id&&this.loadData(this.form.model._id)},uid:function(e){e&&this.loadData(e)}},mounted:function(){this.uid&&(this.$refs.form.resetFields(),this.loadData(this.uid))},methods:{click:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:r.t0=e,r.next="modify"===r.t0?3:"remove"===r.t0?5:"back"===r.t0?8:"conserve"===r.t0?10:"cancel"===r.t0?13:18;break;case 3:return t.$emit("input","modify"),r.abrupt("break",19);case 5:return r.next=7,t.remove(t.form.model);case 7:return r.abrupt("break",19);case 8:return t.backList(),r.abrupt("break",19);case 10:return r.next=12,t.conserve(t.form.model);case 12:return r.abrupt("break",19);case 13:if(!t.uid){r.next=16;break}return t.$emit("input","view"),r.abrupt("return");case 16:return t.backList(),r.abrupt("break",19);case 18:return r.abrupt("break",19);case 19:case"end":return r.stop()}}),r)})))()},backList:function(){this.form.model={},this.$emit("input","")},handleChange:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var a,n,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:r.t0=e.file.status,r.next="uploading"===r.t0?3:"removed"===r.t0?4:"error"===r.t0?6:"done"===r.t0?8:12;break;case 3:return r.abrupt("break",13);case 4:return t.form.model.idFiles.splice(t.form.model.idFiles.map((function(e){return e.idFile})).findIndex((function(t){return t===e.file.response?e.file.response.records[0]._id:e.file.uid})),1),r.abrupt("break",13);case 6:return t.$message.error("".concat(e.file.name," 文件上传失败！")),r.abrupt("break",13);case 8:return e.file.url=t.$url.file.preview+e.file.response.records[0]._id,t.form.model.idFiles.push({idFile:e.file.response.records[0]._id}),t.$message.success("".concat(e.file.name," 文件上传成功！")),r.abrupt("break",13);case 12:return r.abrupt("break",13);case 13:a=Object(i["a"])(e.fileList);try{for(a.s();!(n=a.n()).done;)s=n.value,s.response&&(s.url=t.$url.file.preview+s.response.records[0]._id)}catch(o){a.e(o)}finally{a.f()}case 15:case"end":return r.stop()}}),r)})))()},loadData:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var a,n,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$helper.model("fxe_advise").getByID(e,{params:{populate:"idFiles.idFile"}});case 2:t.form.model=r.sent.records[0],t.defaultFileList=[],a=Object(i["a"])(t.form.model.idFiles);try{for(a.s();!(n=a.n()).done;)s=n.value,t.defaultFileList.push({uid:s.idFile._id,status:"done",name:s.idFile.fileName,url:t.$url.file.preview+s.idFile._id})}catch(o){a.e(o)}finally{a.f()}case 6:case"end":return r.stop()}}),r)})))()},conserve:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:t.$refs.form.validate(function(){var r=Object(s["a"])(regeneratorRuntime.mark((function r(a){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(!a){r.next=17;break}if(!e._id){r.next=8;break}return r.next=4,t.$helper.model("fxe_advise").put(e._id,e);case 4:return r.next=6,t.loadData(e._id);case 6:r.next=14;break;case 8:return r.t0=t,r.next=11,t.$helper.model("fxe_advise").post(e);case 11:return r.t1=r.sent.records._id,r.next=14,r.t0.loadData.call(r.t0,r.t1);case 14:t.$emit("input","view"),r.next=20;break;case 17:t.$message.error("数据有误，请检查后重新提交！！！"),t.loading=!0,setTimeout((function(){t.loading=!1}),1e3);case 20:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}());case 1:case"end":return r.stop()}}),r)})))()},remove:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$helper.model("fxe_advise").delete(e._id);case 2:t.$message.success("数据删除成功"),t.backList();case 4:case"end":return r.stop()}}),r)})))()}}},c=u,d=r("2877"),m=Object(d["a"])(c,a,n,!1,null,"aedfb17c",null);t["default"]=m.exports}}]);