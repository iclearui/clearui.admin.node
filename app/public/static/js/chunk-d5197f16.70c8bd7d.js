(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d5197f16","chunk-2d0d5c7f"],{"21ca":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.view?r("carousel-edit",{attrs:{uid:e.uid},model:{value:e.view,callback:function(t){e.view=t},expression:"view"}}):r("a-card",{attrs:{bordered:!1}},[e.menu.buttons?r("c-button-group",{attrs:{slot:"title",buttons:e.menu.buttons.list},on:{click:e.click},slot:"title"}):e._e(),r("a-table",{attrs:{columns:e.table.columns,bordered:"",tableLayout:"fixed",rowKey:"_id",dataSource:e.table.data,size:"small",customRow:e.customRow,pagination:e.table.pagination,loading:e.loading},on:{change:e.onTableChange},scopedSlots:e._u([{key:"action",fn:function(t,a,n){return[r("a-icon",{attrs:{type:"eye"},on:{click:function(t){e.uid=a._id,e.view="view"}}})]}}],null,!1,3025543602)})],1)},n=[],i=(r("96cf"),r("1da1")),o=r("5530"),u=r("2f62"),l=r("706f"),s={name:"carousel",components:{CarouselEdit:l["default"]},data:function(){return{uid:"",view:"",loading:!0,table:{pagination:{showSizeChanger:!0,showQuickJumper:!0,total:0},query:{order:"_id",limit:10,page:1,populate:"idFile"},columns:[{title:"序号",align:"center",fixed:"left",width:60,customRender:function(e,t,r){return r+1}},{title:"编码",dataIndex:"code",key:"dutyCode",align:"center"},{title:"文件",key:"idFile",align:"center",customRender:function(e,t,r){return t.idFile.fileName}},{title:"操作",align:"center",fixed:"right",width:100,key:"action",scopedSlots:{customRender:"action"}}],data:[]}}},created:function(){this.loadData()},computed:Object(o["a"])({},Object(u["c"])(["menu"])),watch:{view:function(e){e||(this.uid="",this.loadData())}},methods:{click:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:r.t0=e,r.next="create"===r.t0?3:6;break;case 3:return t.uid="",t.view="modify",r.abrupt("break",7);case 6:return r.abrupt("break",7);case 7:case"end":return r.stop()}}),r)})))()},customRow:function(e,t){var r=this;return{on:{dblclick:function(){r.uid=e._id,r.view="view"}}}},loadData:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,e.$helper.model("fxe_carousel").get({params:e.table.query});case 3:r=t.sent,e.table.data=r.records,e.table.pagination.total=r.count,e.loading=!1;case 7:case"end":return t.stop()}}),t)})))()},editClose:function(){this.$refs.form.resetFields(),this.visible=!1},onTableChange:function(e,t,r){var a=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a.table.query.page=e.current,a.table.query.limit!==e.pageSize&&(a.table.query.limit=e.pageSize,a.table.query.page=1),r.field&&(n="ascend"===r.order?r.field:"-"+r.field,a.table.query.order!==n&&(a.table.query.order=n,a.table.query.page=1)),t.next=5,a.loadData();case 5:case"end":return t.stop()}}),t)})))()}}},c=s,d=r("2877"),m=Object(d["a"])(c,a,n,!1,null,"d31d651c",null);t["default"]=m.exports},"706f":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a-card",[e.menu.buttons?r("c-button-group",{attrs:{slot:"title",buttons:e.menu.buttons.edit,showSave:"view"!==e.value,showBack:""},on:{click:e.click},slot:"title"}):e._e(),r("a-form-model",{ref:"form",attrs:{labelAlign:"left",model:e.form.model,rules:e.form.rules,"label-col":e.form.labelCol,"wrapper-col":e.form.wrapperCol,disabled:"view"===e.value}},[r("a-row",{attrs:{gutter:12}},[r("a-col",{attrs:{span:12}},[r("a-form-model-item",{attrs:{label:"标识编码"}},[r("a-input",{attrs:{placeholder:"标识编码",disabled:"view"===e.value},model:{value:e.form.model.code,callback:function(t){e.$set(e.form.model,"code",t)},expression:"form.model.code"}})],1)],1),r("a-col",{attrs:{span:12}},[r("a-form-model-item",{attrs:{label:"选择图片"}},[r("a-upload",{attrs:{name:"file",multiple:!1,"file-list":e.fileList,action:e.$url.file.upload,"before-upload":e.beforeUpload,disabled:"view"===e.value},on:{change:e.handleChange}},[e.form.model.idFile?e._e():r("a-button",[r("a-icon",{attrs:{type:"upload"}}),e._v(" 点击上传 ")],1)],1)],1)],1),r("a-col",{staticStyle:{"text-align":"center"},attrs:{span:24}},[e.imageUrl?r("img",{staticStyle:{width:"600px",height:"400px"},attrs:{src:e.imageUrl,alt:"avatar"}}):e._e()])],1)],1)],1)},n=[],i=(r("b0c0"),r("96cf"),r("1da1")),o=r("5530"),u=r("2f62"),l={name:"edit",props:{value:{type:String},uid:{type:[String,Object]}},data:function(){return{imageUrl:"",fileList:[],form:{labelCol:{span:5},wrapperCol:{span:19},model:{familyInfo:[{}],workInfo:[{}]},rules:{type:[{required:!0,message:"必填",trigger:"blur"}]}}}},computed:Object(o["a"])({},Object(u["c"])(["menu"])),watch:{value:function(e){this.$refs.form.resetFields(),"create"!==e&&this.form.model._id&&this.loadData(this.form.model._id)},uid:function(e){e&&this.loadData(e)}},mounted:function(){this.uid&&(this.$refs.form.resetFields(),this.loadData(this.uid))},methods:{click:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:r.t0=e,r.next="modify"===r.t0?3:"remove"===r.t0?5:"back"===r.t0?8:"conserve"===r.t0?10:"cancel"===r.t0?13:18;break;case 3:return t.$emit("input","modify"),r.abrupt("break",19);case 5:return r.next=7,t.remove(t.form.model);case 7:return r.abrupt("break",19);case 8:return t.backList(),r.abrupt("break",19);case 10:return r.next=12,t.conserve(t.form.model);case 12:return r.abrupt("break",19);case 13:if(!t.uid){r.next=16;break}return t.$emit("input","view"),r.abrupt("return");case 16:return t.backList(),r.abrupt("break",19);case 18:return r.abrupt("break",19);case 19:case"end":return r.stop()}}),r)})))()},backList:function(){this.form.model={},this.$emit("input","")},handleChange:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:r.t0=e.file.status,r.next="uploading"===r.t0?3:"removed"===r.t0?5:"error"===r.t0?9:"done"===r.t0?11:16;break;case 3:return t.fileList=[e.file],r.abrupt("break",17);case 5:return delete t.form.model.idFile,t.fileList=[],t.imageUrl="",r.abrupt("break",17);case 9:return t.$message.error("".concat(e.file.name," 文件上传失败！")),r.abrupt("break",17);case 11:return t.form.model.idFile=e.file.response.records[0]._id,e.file.url=t.$url.file.preview+e.file.response.records[0]._id,t.imageUrl=t.$url.file.preview+e.file.response.records[0]._id,t.$message.success("".concat(e.file.name," 文件上传成功！")),r.abrupt("break",17);case 16:return r.abrupt("break",17);case 17:case"end":return r.stop()}}),r)})))()},beforeUpload:function(e){var t="image/jpeg"===e.type||"image/png"===e.type;t||this.$message.error("只能上传图片!");var r=e.size/1024/1024<2;return r||this.$message.error("请上传小于2MB的文件!"),t&&r},loadData:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$helper.model("fxe_carousel").getByID(e,{params:{populate:"idFile"}});case 2:t.form.model=r.sent.records[0],t.imageUrl=t.$url.file.preview+t.form.model.idFile._id,t.fileList=[{uid:"1",status:"done",name:t.form.model.idFile.fileName,url:t.$url.file.preview+t.form.model.idFile._id}];case 5:case"end":return r.stop()}}),r)})))()},conserve:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:t.$refs.form.validate(function(){var r=Object(i["a"])(regeneratorRuntime.mark((function r(a){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(!a){r.next=17;break}if(!e._id){r.next=8;break}return r.next=4,t.$helper.model("fxe_carousel").put(e._id,e);case 4:return r.next=6,t.loadData(e._id);case 6:r.next=14;break;case 8:return r.t0=t,r.next=11,t.$helper.model("fxe_carousel").post(e);case 11:return r.t1=r.sent.records._id,r.next=14,r.t0.loadData.call(r.t0,r.t1);case 14:t.$emit("input","view"),r.next=20;break;case 17:t.$message.error("数据有误，请检查后重新提交！！！"),t.loading=!0,setTimeout((function(){t.loading=!1}),1e3);case 20:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}());case 1:case"end":return r.stop()}}),r)})))()},remove:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$helper.model("fxe_carousel").delete(e._id);case 2:t.$message.success("数据删除成功"),t.backList();case 4:case"end":return r.stop()}}),r)})))()}}},s=l,c=r("2877"),d=Object(c["a"])(s,a,n,!1,null,"1066ee56",null);t["default"]=d.exports}}]);