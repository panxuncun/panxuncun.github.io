(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-608067d7"],{"4f01":function(a,t,e){},cfcb:function(a,t,e){"use strict";var s=e("4f01"),r=e.n(s);r.a},dedf:function(a,t,e){"use strict";e.r(t);var s=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticStyle:{"padding-top":"25px"}},[e("div",{staticClass:"top-con"},[e("div",{staticStyle:{"margin-left":"15px","margin-bottom":"10px"}},[a._v("赛事数据总览（实时更新）")]),a._v(" "),e("el-row",{attrs:{gutter:20}},[e("el-col",{staticClass:"top-card",attrs:{span:6}},[e("p",[a._v("待审核")]),a._v(" "),e("p",{staticClass:"card-sub-text"},[a._v("5")])]),a._v(" "),e("el-col",{staticClass:"top-card",attrs:{span:6}},[e("p",[a._v("正在举办")]),a._v(" "),e("p",{staticClass:"card-sub-text"},[a._v("6")])]),a._v(" "),e("el-col",{staticClass:"top-card",attrs:{span:6}},[e("p",[a._v("每日新增赛事")]),a._v(" "),e("p",{staticClass:"card-sub-text"},[a._v("3")])]),a._v(" "),e("el-col",{staticClass:"top-card",staticStyle:{"border-right":"none"},attrs:{span:6}},[e("p",[a._v("系统今日流水")]),a._v(" "),e("p",{staticClass:"card-sub-text"},[a._v("￥6200")])])],1)],1),a._v(" "),e("div",{staticClass:"card-con"},[e("div",[a._v("赛事新增统计")]),a._v(" "),e("el-row",{attrs:{gutter:20}},[e("el-col",{attrs:{span:24}},[e("div",{staticClass:"grid-content bg-purple"},[e("div",{attrs:{id:"canvas"}})])])],1)],1)])},r=[],l=e("99af"),c={name:"dash",data:function(){return{btn2:"primary",btnArr:["primary","primary","primary"],lineData:[{year:"1991",value:3},{year:"1992",value:4},{year:"1993",value:3.5},{year:"1994",value:5},{year:"1995",value:4.9},{year:"1996",value:6},{year:"1997",value:7},{year:"1998",value:9},{year:"1999",value:13}],plot:null}},mounted:function(){var a=this,t=new l["a"](document.getElementById("canvas"),{data:a.lineData,smooth:!0,xField:"year",yField:"value",renderer:"svg"});t.render(),this.plot=t},methods:{week:function(){console.log("week");var a=[{year:"1991",value:3},{year:"1992",value:4},{year:"1993",value:3.5},{year:"1994",value:5}];this.plot.changeData(a)}}},n=c,i=(e("cfcb"),e("2877")),v=Object(i["a"])(n,s,r,!1,null,"65aa792d",null);t["default"]=v.exports}}]);