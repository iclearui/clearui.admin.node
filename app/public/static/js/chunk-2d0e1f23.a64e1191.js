(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e1f23"],{"7d33":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a-card",[e.menu.buttons?r("c-button-group",{attrs:{slot:"title",buttons:e.menu.buttons.edit,showSave:"view"!==e.value,showBack:""},on:{click:e.click},slot:"title"}):e._e(),r("a-form-model",{ref:"form",attrs:{labelAlign:"left",model:e.form.model,rules:e.form.rules,"label-col":e.form.labelCol,"wrapper-col":e.form.wrapperCol,disabled:"view"===e.value}},[r("a-row",{attrs:{gutter:12}},[r("a-col",{attrs:{span:6}},[r("a-form-model-item",{attrs:{label:"模板分类"}},[r("c-tree-select",{attrs:{model:"fxe_legal_htmb_class",title:"className",placeholder:"模板分类",disabled:"view"===e.value},model:{value:e.form.model.idClass,callback:function(t){e.$set(e.form.model,"idClass",t)},expression:"form.model.idClass"}})],1)],1),r("a-col",{attrs:{span:6}},[r("a-form-model-item",{attrs:{label:"模板编码"}},[r("a-input",{attrs:{placeholder:"模板编码",disabled:"view"===e.value},model:{value:e.form.model.contractCode,callback:function(t){e.$set(e.form.model,"contractCode",t)},expression:"form.model.contractCode"}})],1)],1),r("a-col",{attrs:{span:6}},[r("a-form-model-item",{attrs:{label:"模板名称"}},[r("a-input",{attrs:{placeholder:"模板名称",disabled:"view"===e.value},model:{value:e.form.model.contractName,callback:function(t){e.$set(e.form.model,"contractName",t)},expression:"form.model.contractName"}})],1)],1),r("a-col",{attrs:{span:6}},[r("a-form-model-item",{attrs:{label:"下载价格"}},[r("a-input-number",{staticStyle:{width:"100%"},attrs:{min:1,placeholder:"下载价格",disabled:"view"===e.value},model:{value:e.form.model.price,callback:function(t){e.$set(e.form.model,"price",t)},expression:"form.model.price"}})],1)],1),r("a-col",{attrs:{span:12}},[r("a-form-model-item",{attrs:{label:"预览文件"}},[r("a-upload",{attrs:{name:"pdf",accept:".pdf",multiple:!1,"file-list":e.fileListPdf,action:e.$url.file.upload,disabled:"view"===e.value},on:{change:e.changePdf}},[e.form.model.idFilePdf?e._e():r("a-button",[r("a-icon",{attrs:{type:"upload"}}),e._v(" 点击上传 ")],1)],1)],1)],1),r("a-col",{attrs:{span:12}},[r("a-form-model-item",{attrs:{label:"下载文件"}},[r("a-upload",{attrs:{name:"word",accept:".doc,.docx",multiple:!1,"file-list":e.fileListWord,action:e.$url.file.upload,disabled:"view"===e.value},on:{change:e.changeWord}},[e.form.model.idFileWord?e._e():r("a-button",[r("a-icon",{attrs:{type:"upload"}}),e._v(" 点击上传 ")],1)],1)],1)],1),r("a-col",{attrs:{span:24}},[r("a-form-model-item",{attrs:{label:"简介"}},[r("a-textarea",{attrs:{placeholder:"简介","allow-clear":"",disabled:"view"===e.value},model:{value:e.form.model.desc,callback:function(t){e.$set(e.form.model,"desc",t)},expression:"form.model.desc"}})],1)],1),r("a-col",{attrs:{span:12}},[r("a-form-model-item",{attrs:{label:"备注"}},[r("a-input",{attrs:{placeholder:"备注",disabled:"view"===e.value},model:{value:e.form.model.memo,callback:function(t){e.$set(e.form.model,"memo",t)},expression:"form.model.memo"}})],1)],1)],1)],1)],1)},o=[],l=(r("b0c0"),r("96cf"),r("1da1")),i=r("5530"),s=r("2f62"),n={name:"edit",props:{value:{type:String},uid:{type:[String,Object]}},data:function(){return{fileListPdf:[],fileListWord:[],form:{labelCol:{span:5},wrapperCol:{span:19},model:{},rules:{type:[{required:!0,message:"必填",trigger:"blur"}]}}}},computed:Object(i["a"])({},Object(s["c"])(["menu"])),watch:{value:function(e){this.$refs.form.resetFields(),"create"!==e&&this.form.model._id&&this.loadData(this.form.model._id)},uid:function(e){e&&this.loadData(e)}},mounted:function(){this.uid&&(this.$refs.form.resetFields(),this.loadData(this.uid))},methods:{click:function(e){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:r.t0=e,r.next="modify"===r.t0?3:"remove"===r.t0?5:"back"===r.t0?8:"conserve"===r.t0?10:"cancel"===r.t0?13:18;break;case 3:return t.$emit("input","modify"),r.abrupt("break",19);case 5:return r.next=7,t.remove(t.form.model);case 7:return r.abrupt("break",19);case 8:return t.backList(),r.abrupt("break",19);case 10:return r.next=12,t.conserve(t.form.model);case 12:return r.abrupt("break",19);case 13:if(!t.uid){r.next=16;break}return t.$emit("input","view"),r.abrupt("return");case 16:return t.backList(),r.abrupt("break",19);case 18:return r.abrupt("break",19);case 19:case"end":return r.stop()}}),r)})))()},backList:function(){this.form.model={},this.$emit("input","")},changePdf:function(e){switch(e.file.status){case"uploading":this.fileListPdf=[e.file];break;case"removed":delete this.form.model.idFilePdf,this.fileListPdf=[];break;case"error":this.$message.error("".concat(e.file.name," 文件上传失败！"));break;case"done":this.form.model.idFilePdf=e.file.response.records[0]._id,this.fileListPdf[0].url=this.$url.file.preview+e.file.response.records[0]._id,this.$message.success("".concat(e.file.name," 文件上传成功！"));break;default:break}},changeWord:function(e){switch(e.file.status){case"uploading":this.fileListWord=[e.file];break;case"removed":delete this.form.model.idFileWord,this.fileListWord=[];break;case"error":this.$message.error("".concat(e.file.name," 文件上传失败！"));break;case"done":this.form.model.idFileWord=e.file.response.records[0]._id,this.fileListWord[0].url=this.$url.file.preview+e.file.response.records[0]._id,this.$message.success("".concat(e.file.name," 文件上传成功！"));break;default:break}},loadData:function(e){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$helper.model("fxe_legal_htmb").getByID(e,{params:{populate:"idFilePdf,idFileWord"}});case 2:t.form.model=r.sent.records[0],t.fileListPdf=[{uid:"1",status:"done",name:t.form.model.idFilePdf.fileName,url:t.$url.file.preview+t.form.model.idFilePdf._id}],t.fileListWord=[{uid:"1",status:"done",name:t.form.model.idFileWord.fileName,url:t.$url.file.preview+t.form.model.idFileWord._id}];case 5:case"end":return r.stop()}}),r)})))()},conserve:function(e){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:t.$refs.form.validate(function(){var r=Object(l["a"])(regeneratorRuntime.mark((function r(a){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(!a){r.next=17;break}if(!e._id){r.next=8;break}return r.next=4,t.$helper.model("fxe_legal_htmb").put(e._id,e);case 4:return r.next=6,t.loadData(e._id);case 6:r.next=14;break;case 8:return r.t0=t,r.next=11,t.$helper.model("fxe_legal_htmb").post(e);case 11:return r.t1=r.sent.records._id,r.next=14,r.t0.loadData.call(r.t0,r.t1);case 14:t.$emit("input","view"),r.next=20;break;case 17:t.$message.error("数据有误，请检查后重新提交！！！"),t.loading=!0,setTimeout((function(){t.loading=!1}),1e3);case 20:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}());case 1:case"end":return r.stop()}}),r)})))()},remove:function(e){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$helper.model("fxe_legal_htmb").delete(e._id);case 2:t.$message.success("数据删除成功"),t.backList();case 4:case"end":return r.stop()}}),r)})))()}}},d=n,c=r("2877"),m=Object(c["a"])(d,a,o,!1,null,"141a29a8",null);t["default"]=m.exports}}]);