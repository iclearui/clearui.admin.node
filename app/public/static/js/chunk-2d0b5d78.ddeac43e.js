(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b5d78"],{"1b2c":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a-card",[e.menu.buttons?r("c-button-group",{attrs:{slot:"title",buttons:e.menu.buttons.edit,showSave:"view"!==e.value,showBack:""},on:{click:e.click},slot:"title"}):e._e(),r("a-form-model",{ref:"form",attrs:{labelAlign:"left",model:e.form.model,rules:e.form.rules,"label-col":e.form.labelCol,"wrapper-col":e.form.wrapperCol,disabled:"view"===e.value}},[r("a-row",{attrs:{gutter:12}},[r("a-col",{attrs:{span:6}},[r("a-form-model-item",{attrs:{label:"标识编码"}},[r("a-input",{attrs:{placeholder:"编码",disabled:"view"===e.value},model:{value:e.form.model.code,callback:function(t){e.$set(e.form.model,"code",t)},expression:"form.model.code"}})],1)],1),r("a-col",{attrs:{span:6}},[r("a-form-model-item",{attrs:{label:"名称"}},[r("a-input",{attrs:{placeholder:"名称",disabled:"view"===e.value},model:{value:e.form.model.name,callback:function(t){e.$set(e.form.model,"name",t)},expression:"form.model.name"}})],1)],1),r("a-col",{attrs:{span:6}},[r("a-form-model-item",{attrs:{label:"标题"}},[r("a-input",{attrs:{placeholder:"标题",disabled:"view"===e.value},model:{value:e.form.model.title,callback:function(t){e.$set(e.form.model,"title",t)},expression:"form.model.title"}})],1)],1),r("a-col",{attrs:{span:6}},[r("a-form-model-item",{attrs:{label:"悬赏类型"}},[r("c-tree-select",{attrs:{model:"fxe_reward_class",title:"className",placeholder:"悬赏类型",disabled:"view"===e.value},model:{value:e.form.model.type,callback:function(t){e.$set(e.form.model,"type",t)},expression:"form.model.type"}})],1)],1),r("a-col",{attrs:{span:24}},[r("a-form-model-item",{attrs:{label:"悬赏事由"}},[r("a-textarea",{attrs:{placeholder:"悬赏事由","allow-clear":"",disabled:"view"===e.value},model:{value:e.form.model.reason,callback:function(t){e.$set(e.form.model,"reason",t)},expression:"form.model.reason"}})],1)],1),r("a-col",{attrs:{span:12}},[r("a-form-model-item",{attrs:{label:"悬赏金额"}},[r("a-input",{attrs:{placeholder:"悬赏金额",disabled:"view"===e.value},model:{value:e.form.model.money,callback:function(t){e.$set(e.form.model,"money",t)},expression:"form.model.money"}})],1)],1),r("a-col",{attrs:{span:12}},[r("a-form-model-item",{attrs:{label:"悬赏期限"}},[r("a-input",{attrs:{placeholder:"悬赏期限",disabled:"view"===e.value},model:{value:e.form.model.deadline,callback:function(t){e.$set(e.form.model,"deadline",t)},expression:"form.model.deadline"}})],1)],1),r("a-col",{attrs:{span:24}},[r("a-form-model-item",{attrs:{label:"完成标准"}},[r("a-textarea",{attrs:{placeholder:"完成标准","allow-clear":"",disabled:"view"===e.value},model:{value:e.form.model.completeStandard,callback:function(t){e.$set(e.form.model,"completeStandard",t)},expression:"form.model.completeStandard"}})],1)],1)],1)],1)],1)},o=[],l=(r("96cf"),r("1da1")),n=r("5530"),s=r("2f62"),i={name:"edit",props:{value:{type:String},uid:{type:[String,Object]}},data:function(){return{form:{labelCol:{span:5},wrapperCol:{span:19},model:{familyInfo:[{}],workInfo:[{}]},rules:{type:[{required:!0,message:"必填",trigger:"blur"}]}}}},computed:Object(n["a"])({},Object(s["c"])(["menu"])),watch:{value:function(e){this.$refs.form.resetFields(),"create"!==e&&this.form.model._id&&this.loadData(this.form.model._id)},uid:function(e){e&&this.loadData(e)}},mounted:function(){this.uid&&(this.$refs.form.resetFields(),this.loadData(this.uid))},methods:{click:function(e){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:r.t0=e,r.next="modify"===r.t0?3:"remove"===r.t0?5:"back"===r.t0?8:"conserve"===r.t0?10:"cancel"===r.t0?13:18;break;case 3:return t.$emit("input","modify"),r.abrupt("break",19);case 5:return r.next=7,t.remove(t.form.model);case 7:return r.abrupt("break",19);case 8:return t.backList(),r.abrupt("break",19);case 10:return r.next=12,t.conserve(t.form.model);case 12:return r.abrupt("break",19);case 13:if(!t.uid){r.next=16;break}return t.$emit("input","view"),r.abrupt("return");case 16:return t.backList(),r.abrupt("break",19);case 18:return r.abrupt("break",19);case 19:case"end":return r.stop()}}),r)})))()},backList:function(){this.form.model={},this.$emit("input","")},loadData:function(e){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$helper.model("fxe_reward").getByID(e);case 2:t.form.model=r.sent.records[0];case 3:case"end":return r.stop()}}),r)})))()},conserve:function(e){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:t.$refs.form.validate(function(){var r=Object(l["a"])(regeneratorRuntime.mark((function r(a){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(!a){r.next=17;break}if(!e._id){r.next=8;break}return r.next=4,t.$helper.model("fxe_reward").put(e._id,e);case 4:return r.next=6,t.loadData(e._id);case 6:r.next=14;break;case 8:return r.t0=t,r.next=11,t.$helper.model("fxe_reward").post(e);case 11:return r.t1=r.sent.records._id,r.next=14,r.t0.loadData.call(r.t0,r.t1);case 14:t.$emit("input","view"),r.next=20;break;case 17:t.$message.error("数据有误，请检查后重新提交！！！"),t.loading=!0,setTimeout((function(){t.loading=!1}),1e3);case 20:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}());case 1:case"end":return r.stop()}}),r)})))()},remove:function(e){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$helper.model("fxe_reward").delete(e._id);case 2:t.$message.success("数据删除成功"),t.backList();case 4:case"end":return r.stop()}}),r)})))()}}},c=i,m=r("2877"),d=Object(m["a"])(c,a,o,!1,null,"c0eb5038",null);t["default"]=d.exports}}]);