!function(t){function e(i){if(n[i])return n[i].exports;var a=n[i]={exports:{},id:i,loaded:!1};return t[i].call(a.exports,a,a.exports,e),a.loaded=!0,a.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){var i=n(6),a=(i.main,i.init);a()},function(t,e){t.exports=React},function(t,e){var n={isMatch:function(t,e){switch(t){case"name":return e.toString().length>>1;case"tel":return e.toString().match(/^1\d{10}$/)?1:0;case"phone":return e.toString().match(/^(0|8)[1-9]{1,2}\d{7,8}$/)?1:0;case"captcha":return e.toString().match(/^\d{6}$/)?1:0;case"password":return e.toString().match(/^\S{6,16}$/)?1:0;case"bankcard":return e.toString().match(/^\d{16,19}$/)?1:0;case"idcard":return e.toString().match(/^\d{15,18}$/)?1:0}},Adaptor:function(t,e){var n;switch(t){case"complexNav":n={supList:[]},e.forEach(function(t,e){1===t.level?(t.subList=[],n.supList.push(t)):n.supList[t.type-1].subList.push(t)})}return n},QueryString:function(t){var e=window.location.search.substr(1).match(new RegExp("(^|&)"+t+"=([^&]*)(&|$)"));return null===e?null:unescape(e[2])},ParamString:function(){var t=window.location.href,e=window.location.search,n=e?t.split(e)[0].substring(t.split(e)[0].lastIndexOf("/")+1):t.split("/")[t.split("/").length-1];return~n.indexOf("#")?n.split("#")[0]:n},Storage:function(t){this.name=t.name,this.version=t.version,this.url=t.url,this.callback=t.callback,localStorage[this.name]&&localStorage[this.name+"_v"]===this.version?this.callback(JSON.parse(localStorage[this.name])):$.ajax({url:this.url,success:function(t){localStorage[this.name]=JSON.stringify(t),localStorage[this.name+"_v"]=this.version,this.callback(t)}.bind(this)})},getPage:function(t){var e=(t.react,t.reactDOMServer,t.req,t.main);return e},setRem:function(){document.documentElement.style.fontSize=window.innerWidth/16+"px"}};t.exports=n},,,,function(t,e,n){var i=n(1),a=n(2),r=i.createClass({displayName:"InfoDetail",getInitialState:function(){return{title:this.props.title,time:this.props.time,source:this.props.source,detail:this.props.detail}},checkMarkup:function(){return{__html:this.state.detail}},render:function(){return i.createElement("section",{className:"detail"},i.createElement("h1",null,this.state.title),i.createElement("h2",null,"来源:"+this.state.source),i.createElement("div",{className:"detail",dangerouslySetInnerHTML:this.checkMarkup()}),i.createElement("span",null,this.state.time))}}),s=i.createClass({displayName:"Info",getInitialState:function(){return{index:this.props.index,status:this.props.status,title:this.props.title,introduce:this.props.introduce,detail:this.props.detail,source:this.props.source,time:this.props.time}},handleClick:function(){var t=document.body;a.QueryString("index")||window.history.pushState({},this.state.title,"?index="+this.state.index),window.addEventListener("popstate",function(t){c()},0),document.title=this.state.title,document.body.style.backgroundColor="white",i.render(i.createElement(r,{title:this.state.title,time:this.state.time,source:this.state.source,detail:this.state.detail}),t)},render:function(){return i.createElement("section",{className:this.state.status?"unread":"",onClick:this.handleClick},i.createElement("h1",null,this.state.title),i.createElement("p",null,this.state.introduce),i.createElement("span",null,this.state.time))}}),o=i.createClass({displayName:"Page",getInitialState:function(){return{data:this.props.data}},shouldComponentUpdate:function(t,e){return e.data.length!==this.state.data.length},componentDidMount:function(){a.setRem(),a.QueryString("index")&&this.refs["info"+a.QueryString("index")].getDOMNode().click()},render:function(){var t=[],e=this.state.data;return e.forEach(function(e,n){t.push(i.createElement(s,{index:n+1,status:e.status,title:e.title,introduce:e.introduce,detail:e.detail,source:e.source,time:e.time,ref:"info"+(n+1)}))}),i.createElement("body",null,t)}}),c=function(){$.ajax({url:"http://www.xilanlicai.com/api/getnews?pageindex=1&pagesize=99&newstype=1",success:function(t){document.title="消息中心",document.body.style.backgroundColor="rgb(244, 244, 244)",i.render(i.createElement(o,{data:t.data}),document.body)}})};t.exports={main:o,init:c}}]);