!function(t){function e(r){if(n[r])return n[r].exports;var a=n[r]={exports:{},id:r,loaded:!1};return t[r].call(a.exports,a,a.exports,e),a.loaded=!0,a.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){var r=n(1),a=n(2),i=n(3),c=i.Shortcut;a.setRem();var s=r.createClass({displayName:"Page",render:function(){return r.createElement("body",null,r.createElement(c,null))}});r.render(r.createElement(s,null),document.body)},function(t,e){t.exports=React},function(t,e){var n={isMatch:function(t,e){switch(t){case"name":return e.toString().length>>1;case"tel":return e.toString().match(/^1\d{10}$/)?1:0;case"phone":return e.toString().match(/^(0|8)[1-9]{1,2}\d{7,8}$/)?1:0;case"captcha":return e.toString().match(/^\d{6}$/)?1:0;case"password":return e.toString().match(/^\S{6,16}$/)?1:0;case"bankcard":return e.toString().match(/^\d{16,19}$/)?1:0;case"idcard":return e.toString().match(/^\d{15,18}$/)?1:0}},Adaptor:function(t,e){var n;switch(t){case"complexNav":n={supList:[]},e.forEach(function(t,e){1===t.level?(t.subList=[],n.supList.push(t)):n.supList[t.type-1].subList.push(t)})}return n},QueryString:function(t){var e=window.location.search.substr(1).match(new RegExp("(^|&)"+t+"=([^&]*)(&|$)"));return null===e?null:unescape(e[2])},ParamString:function(){var t=window.location.href,e=window.location.search,n=e?t.split(e)[0].substring(t.split(e)[0].lastIndexOf("/")+1):t.split("/")[t.split("/").length-1];return~n.indexOf("#")?n.split("#")[0]:n},Storage:function(t){this.name=t.name,this.version=t.version,this.url=t.url,this.callback=t.callback,localStorage[this.name]&&localStorage[this.name+"_v"]===this.version?this.callback(JSON.parse(localStorage[this.name])):$.ajax({url:this.url,success:function(t){localStorage[this.name]=JSON.stringify(t),localStorage[this.name+"_v"]=this.version,this.callback(t)}.bind(this)})},getPage:function(t){var e=(t.react,t.reactDOMServer,t.req,t.main);return e},setRem:function(){document.documentElement.style.fontSize=window.innerWidth/16+"px"}};t.exports=n},function(t,e,n){t.exports={Shortcut:n(4)}},function(t,e,n){var r=n(1),a=r.createClass({displayName:"Shortcut",render:function(){return r.createElement("div",{className:"shortcut"})}});t.exports=a}]);