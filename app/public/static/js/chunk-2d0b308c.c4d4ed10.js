(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b308c"],{"273d":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a-card",[e.menu.buttons?r("c-button-group",{attrs:{slot:"title",buttons:e.menu.buttons.edit,showSave:"view"!==e.value,showBack:""},on:{click:e.click},slot:"title"}):e._e(),r("a-form-model",{ref:"form",attrs:{labelAlign:"left",model:e.form.model,rules:e.form.rules,"label-col":e.form.labelCol,"wrapper-col":e.form.wrapperCol,disabled:"view"===e.value}},[r("a-row",{attrs:{gutter:12}},[r("a-col",{attrs:{span:12}},[r("a-form-model-item",{attrs:{label:"上级节点"}},[r("c-tree-select",{attrs:{model:"fxe_reward_class",title:"className",placeholder:"上级节点",disabled:"view"===e.value,showRoot:""},model:{value:e.form.model.p_id,callback:function(t){e.$set(e.form.model,"p_id",t)},expression:"form.model.p_id"}})],1)],1),r("a-col",{attrs:{span:12}},[r("a-form-model-item",{attrs:{label:"分类编码"}},[r("a-input",{attrs:{placeholder:"分类编码",disabled:"view"===e.value},model:{value:e.form.model.classCode,callback:function(t){e.$set(e.form.model,"classCode",t)},expression:"form.model.classCode"}})],1)],1),r("a-col",{attrs:{span:12}},[r("a-form-model-item",{attrs:{label:"分类名称"}},[r("a-input",{attrs:{placeholder:"分类名称",disabled:"view"===e.value},model:{value:e.form.model.className,callback:function(t){e.$set(e.form.model,"className",t)},expression:"form.model.className"}})],1)],1),r("a-col",{attrs:{span:12}},[r("a-form-model-item",{attrs:{label:"备注"}},[r("a-input",{attrs:{placeholder:"备注",disabled:"view"===e.value},model:{value:e.form.model.memo,callback:function(t){e.$set(e.form.model,"memo",t)},expression:"form.model.memo"}})],1)],1)],1)],1)],1)},s=[],n=(r("96cf"),r("1da1")),o=r("5530"),l=r("2f62"),c={name:"edit",props:{value:{type:String},uid:{type:[String,Object]}},data:function(){return{classes:[],form:{labelCol:{span:5},wrapperCol:{span:19},model:{},rules:{type:[{required:!0,message:"必填",trigger:"blur"}]}}}},computed:Object(o["a"])({},Object(l["c"])(["menu"])),watch:{value:function(e){this.$refs.form.resetFields(),this.loadClasses(),"create"!==e&&this.form.model._id&&this.loadData(this.form.model._id)},uid:function(e){e&&this.loadData(e)}},mounted:function(){this.loadClasses(),this.uid&&(this.$refs.form.resetFields(),this.loadData(this.uid))},methods:{click:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:r.t0=e,r.next="modify"===r.t0?3:"remove"===r.t0?5:"back"===r.t0?8:"conserve"===r.t0?10:"cancel"===r.t0?13:18;break;case 3:return t.$emit("input","modify"),r.abrupt("break",19);case 5:return r.next=7,t.remove(t.form.model);case 7:return r.abrupt("break",19);case 8:return t.backList(),r.abrupt("break",19);case 10:return r.next=12,t.conserve(t.form.model);case 12:return r.abrupt("break",19);case 13:if(!t.uid){r.next=16;break}return t.$emit("input","view"),r.abrupt("return");case 16:return t.backList(),r.abrupt("break",19);case 18:return r.abrupt("break",19);case 19:case"end":return r.stop()}}),r)})))()},backList:function(){this.form.model={},this.$emit("input","")},loadClasses:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.t0=e.$helper,t.next=3,e.$helper.model("fxe_reward_class").get();case 3:t.t1=t.sent.records,e.classes=t.t0.listToTree.call(t.t0,t.t1,"0");case 5:case"end":return t.stop()}}),t)})))()},loadData:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$helper.model("fxe_reward_class").getByID(e);case 2:t.form.model=r.sent.records[0];case 3:case"end":return r.stop()}}),r)})))()},conserve:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:t.$refs.form.validate(function(){var r=Object(n["a"])(regeneratorRuntime.mark((function r(a){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(!a){r.next=17;break}if(!e._id){r.next=8;break}return r.next=4,t.$helper.model("fxe_reward_class").put(e._id,e);case 4:return r.next=6,t.loadData(e._id);case 6:r.next=14;break;case 8:return r.t0=t,r.next=11,t.$helper.model("fxe_reward_class").post(e);case 11:return r.t1=r.sent.records._id,r.next=14,r.t0.loadData.call(r.t0,r.t1);case 14:t.$emit("input","view"),r.next=20;break;case 17:t.$message.error("数据有误，请检查后重新提交！！！"),t.loading=!0,setTimeout((function(){t.loading=!1}),1e3);case 20:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}());case 1:case"end":return r.stop()}}),r)})))()},remove:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$helper.model("fxe_reward_class").delete(e._id);case 2:t.$message.success("数据删除成功"),t.backList();case 4:case"end":return r.stop()}}),r)})))()}}},i=c,u=r("2877"),m=Object(u["a"])(i,a,s,!1,null,"34c44a94",null);t["default"]=m.exports}}]);