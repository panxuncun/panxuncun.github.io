(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9734e83c"],{"3d94":function(t,e,n){"use strict";n.d(e,"j",(function(){return o})),n.d(e,"i",(function(){return a})),n.d(e,"q",(function(){return i})),n.d(e,"a",(function(){return s})),n.d(e,"k",(function(){return u})),n.d(e,"o",(function(){return l})),n.d(e,"l",(function(){return c})),n.d(e,"f",(function(){return d})),n.d(e,"d",(function(){return m})),n.d(e,"b",(function(){return g})),n.d(e,"e",(function(){return f})),n.d(e,"c",(function(){return p})),n.d(e,"m",(function(){return h})),n.d(e,"h",(function(){return b})),n.d(e,"g",(function(){return w})),n.d(e,"n",(function(){return z})),n.d(e,"p",(function(){return v})),n.d(e,"r",(function(){return O})),n.d(e,"s",(function(){return j}));var r=n("b775");function o(t){return console.log("params->",t),Object(r["a"])({url:"/contest/listByOrganizer",method:"get",params:t})}function a(t){return Object(r["a"])({url:"/contest/info/"+t,method:"get"})}function i(t){return Object(r["a"])({url:"/contest/update",method:"post",data:t})}function s(t){return Object(r["a"])({url:"/contest/add",method:"post",data:t})}function u(t){return console.log("主办方：获取指定赛事下的报名记录->",t),Object(r["a"])({url:"/contest/enrollment/listByContestId",method:"get",params:t})}function l(t){return Object(r["a"])({url:"/contest/enrollment/listByQuery",method:"get",params:t})}function c(t){return Object(r["a"])({url:"/contest/group/list/"+t,method:"get"})}function d(t){return Object(r["a"])({url:"/contest/enrollment/check",method:"post",data:t})}function m(t){return Object(r["a"])({url:"/contest/enrollment/batchRefund",method:"post",data:t})}function g(t){return Object(r["a"])({url:"/order/batchAgreeRefund",method:"post",data:t})}function f(t){return Object(r["a"])({url:"/order/batchRefuseRefund",method:"post",data:t})}function p(t){return Object(r["a"])({url:"/order/batchCancelOrder",method:"post",data:t})}function h(t){return Object(r["a"])({url:"/order/listByQuery",method:"get",params:t})}function b(t){return Object(r["a"])({url:"/contest/createConstantNumber/"+t,method:"post"})}function w(t){return Object(r["a"])({url:"/contest/count/enrollmentArr",method:"get",params:t})}function z(){return Object(r["a"])({url:"/organizer/info",method:"get"})}function v(t){return Object(r["a"])({url:"/organizer/sign",method:"post",data:t})}function O(t){return Object(r["a"])({url:"/organizer/update",method:"post",data:t})}function j(t){return Object(r["a"])({url:"organizer/updateOrganizerPassword",method:"post",data:t})}},"4d2a":function(t,e,n){"use strict";var r=n("bee6"),o=n.n(r);o.a},b7f4:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"con"},[n("div",{staticClass:"topbtn",staticStyle:{width:"125px",top:"20px",right:"320px"},on:{click:t.gotoAdmin}},[t._v("内管系统入口")]),t._v(" "),n("div",{staticClass:"topbtn",on:{click:t.gotoOrgainzer}},[t._v("主办方入口")]),t._v(" "),n("div",{staticClass:"text-con"},[n("h1",{staticClass:"lark-pages-home-components-banner-index-title"},[t._v("CONTEST 赛事")]),t._v(" "),n("div",{staticClass:"text"},[t._v("赛事快速发布，服务高效入驻。为主办方提供完整解决方案。")]),t._v(" "),n("a",{staticClass:"btn",on:{click:t.showDiag}},[t._v("注册为主办方")])]),t._v(" "),n("el-dialog",{attrs:{title:t.注册为主办方,visible:t.dialogVisible,width:"500px"},on:{"update:visible":function(e){t.dialogVisible=e}}},[n("el-form",{ref:"adminForm",attrs:{model:t.admin,"label-width":"150px",size:"small"}},[n("el-form-item",{attrs:{label:"帐号："}},[n("el-input",{staticStyle:{width:"250px"},attrs:{maxlength:"30","show-word-limit":""},model:{value:t.organizer.username,callback:function(e){t.$set(t.organizer,"username",e)},expression:"organizer.username"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"密码："}},[n("el-input",{staticStyle:{width:"250px"},attrs:{maxlength:"30","show-word-limit":"",type:"password"},model:{value:t.organizer.password,callback:function(e){t.$set(t.organizer,"password",e)},expression:"organizer.password"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"确认密码："}},[n("el-input",{staticStyle:{width:"250px"},attrs:{maxlength:"30","show-word-limit":"",type:"password"},model:{value:t.organizer.surePassword,callback:function(e){t.$set(t.organizer,"surePassword",e)},expression:"organizer.surePassword"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"机构全称："}},[n("el-input",{staticStyle:{width:"250px"},attrs:{type:"textarea",maxlength:"50","show-word-limit":"",rows:3},model:{value:t.organizer.organizerName,callback:function(e){t.$set(t.organizer,"organizerName",e)},expression:"organizer.organizerName"}})],1)],1),t._v(" "),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{size:"small"},on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),t._v(" "),n("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){return t.organizerSign()}}},[t._v("确 定")])],1)],1)],1)},o=[],a=n("3d94"),i={name:"common",data:function(){return{dialogVisible:!1,organizer:{organizerName:"",password:"",surePassword:"",username:""}}},methods:{showDiag:function(){this.dialogVisible=!0},organizerSign:function(){var t=this,e=this,n=this.organizer.organizerName,r=this.organizer.username,o=this.organizer.password,i=this.organizer.surePassword;o==i?r.length<3?e.$message({message:"账号长度要求3-30",type:"fail"}):o.length<3?e.$message({message:"密码长度要求3-30",type:"fail"}):n.length<3?e.$message({message:"请填写真实的机构名称，该名称过短",type:"fail"}):Object(a["p"])(this.organizer).then((function(e){t.$message({message:"注册成功",type:"success"}),t.dialogVisible=!1})):e.$message({message:"两次输入密码不一致",type:"fail"})},gotoAdmin:function(){this.$router.push("/loginForAdmin")},gotoOrgainzer:function(){this.$router.push("/login")}}},s=i,u=(n("4d2a"),n("2877")),l=Object(u["a"])(s,r,o,!1,null,"3a0b6ed2",null);e["default"]=l.exports},bee6:function(t,e,n){}}]);