!function(e){function t(r){if(n[r])return n[r].exports;var a=n[r]={exports:{},id:r,loaded:!1};return e[r].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";var r=n(19);r.init()},function(e,t){e.exports=React},function(e,t){e.exports=ReactDOM},function(e,t){"use strict";var n={isMatch:function(e,t){switch(e){case"name":return t.toString().length>>1;case"mobile":return t.toString().match(/^1\d{10}$/)?1:0;case"phone":return t.toString().match(/^(0|8)[1-9]{1,2}\d{7,8}$/)?1:0;case"captcha":return t.toString().match(/^\d{5}$/)?1:0;case"password":return t.toString().match(/^\S{6,16}$/)?1:0;case"bankcard":return t.toString().match(/^\d{16,19}$/)?1:0;case"idcard":return t.toString().match(/^\d{15,18}$/)?1:0}},QueryString:function(e,t){var n=new RegExp("(^|&)"+e+"=([^&]*)(&|$)"),r=t?t.substr(1).match(n):window.location.search.substr(1).match(n);return null===r?null:unescape(r[2])},ParamString:function(){var e=window.location.href,t=window.location.search,n=t?e.split(t)[0].substring(e.split(t)[0].lastIndexOf("/")+1):e.split("/")[e.split("/").length-1];return~n.indexOf("#")?n.split("#")[0]:n},Storage:function(e){var t=this;this.name=e.name,this.version=e.version,this.url=e.url,this.callback=e.callback,localStorage[this.name]&&localStorage[this.name+"_v"]===this.version?this.callback(JSON.parse(localStorage[this.name])):$.ajax({url:this.url,success:function(e){localStorage[t.name]=JSON.stringify(e),localStorage[t.name+"_v"]=t.version,t.callback(e)}})},getPage:function(e){var t=(e.react,e.reactDOMServer,e.req,e.main);return t},setRem:function(){document.documentElement.style.fontSize=window.innerWidth/16+"px"},PageData:{render:function(e){n.setRem(),document.body.style.opacity=1,window.onpopstate=function(){e()}},setData:function(e,t){var n=this;return e&&!this.getData()?$.ajax({url:e,success:function(e){n.data=e,t(e)}}):t(this.getData()),this},getData:function(){return this.data}}};e.exports=n},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(t,"__esModule",{value:!0});var u=n(1),c=function(e){function t(e){r(this,t);var n=a(this,Object.getPrototypeOf(t).call(this,e));return n.state={message:e.message,autoHide:e.autoHide},n.autoHide=function(){n.state.autoHide&&!function(){var e=setTimeout(function(){clearTimeout(e),n.setState({message:""})},2500)}()},n}return o(t,e),i(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({message:e.message})}},{key:"componentDidMount",value:function(){this.autoHide()}},{key:"shouldComponentUpdate",value:function(e,t){return e.message!==this.props.message||t.message!==this.state.message}},{key:"componentDidUpdate",value:function(){this.autoHide()}},{key:"render",value:function(){return React.createElement("p",{className:"message"},this.state.message)}}]),t}(u.Component);c.defaultProps={message:""},t["default"]=c},function(e,t){e.exports=Redux},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(t,"__esModule",{value:!0});var u=n(1),c=function(e){function t(e){r(this,t);var n=a(this,Object.getPrototypeOf(t).call(this,e));return n.state={html:e.html},n}return o(t,e),i(t,[{key:"componentDidUpdate",value:function(){var e=this;this.state.html&&(document.querySelector(".shadow").style.display="block");var t=document.querySelector(".shadow");t.onclick=function(){e.props.enableClose&&(t.style.display="none")}}},{key:"render",value:function(){return React.createElement("div",{className:"dialog"},this.state.html)}}]),t}(u.Component);c.defaultProps={html:""},t["default"]=c},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(t,"__esModule",{value:!0});var c=n(1),s=n(2),l=(r(s),n(4)),f=(r(l),function(e){function t(e){a(this,t);var n=o(this,Object.getPrototypeOf(t).call(this,e));return n.state={currentIndex:e.option.currentIndex,index:e.option.index,href:e.option.href,text:e.option.text},n}return i(t,e),u(t,[{key:"render",value:function(){var e=this.state;return React.createElement("a",{className:e.currentIndex===e.index?"current":"",href:e.href},React.createElement("i",null),React.createElement("span",null,e.text))}}]),t}(c.Component)),p=function(e){function t(e){a(this,t);var n=o(this,Object.getPrototypeOf(t).call(this,e));return n.state={href:e.option.href,text:e.option.text},n}return i(t,e),u(t,[{key:"render",value:function(){var e=this.state;return React.createElement("a",{href:e.href},React.createElement("i",null),React.createElement("span",null,e.text))}}]),t}(c.Component),m=function(e){function t(e){a(this,t);var n=o(this,Object.getPrototypeOf(t).call(this,e));return n.state={href:e.option.href,name:e.option.name,value:e.option.value},n}return i(t,e),u(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({href:e.option.href,name:e.option.name,value:e.option.value})}},{key:"render",value:function(){var e=this.state;return React.createElement("a",{href:e.href},React.createElement("h1",null,e.name),React.createElement("h2",null,e.value))}}]),t}(c.Component),h=function(e){function t(e){a(this,t);var n=o(this,Object.getPrototypeOf(t).call(this,e));return n.state={currentIndex:e.currentIndex,menu:function(){var t=void 0;switch(e.type){case 1:t=e.menu1;break;case 2:t=e.menu2;break;case 3:t=e.menu3;break;case 4:t=e.menu4}return t}()},n.getListType=function(e,t){var r=void 0;switch(n.props.type){case 1:r=React.createElement(f,{option:{currentIndex:n.state.currentIndex,index:t,href:e.href,text:e.text},key:t});break;case 2:r=React.createElement(p,{option:{href:e.href,text:e.text},key:t});break;case 3:case 4:r=React.createElement(m,{option:{href:e.href,name:e.name,value:e.value},key:t})}return r},n}return i(t,e),u(t,[{key:"componentDidMount",value:function(){var e=this;(3===this.props.type||4===this.props.type)&&$.ajax({type:"post",url:"/api/getinvest",success:function(t){if(200===t.code)e.setState({menu:{className:e.state.menu.className,option:3===e.props.type?[{href:"/asset",name:"我的资产",value:(t.money+t.investment||0).toFixed(2)},{href:"",name:"预期收益",value:(t.investment||0).toFixed(2)},{href:"/profit?status=1",name:"历史收益",value:(t.allInvestment||0).toFixed(2)}]:[{href:"/asset",name:"我的资产",value:(t.money+t.investment||0).toFixed(2)},{href:"",name:"预期收益",value:(t.investment||0).toFixed(2)}]}});else{var n=e.props.store;n.warning&&n.warning.component.setState({message:t.message}),405!==t.code&&!function(){var e=setTimeout(function(){clearTimeout(e),window.location.href="/signin"},1e3)}()}}})}},{key:"render",value:function(){var e=this,t=[],n=this.state.menu;return n.option.map(function(n,r){t.push(e.getListType(n,r))}),React.createElement("menu",{className:n.className},t)}}]),t}(c.Component);h.defaultProps={menu1:{className:"footer",option:[{href:"/",text:"首页"},{href:"/product",text:"理财产品"},{href:"/me",text:"我的账户"},{href:"/more",text:"更多"}]},menu2:{className:"menu_3col_anchor",option:[{href:"/bonus",text:"推荐送红包"},{href:"/activity",text:"活动中心"},{href:"/score?sign=1",text:"马上签到"}]},menu3:{className:"menu_3col_infoAnchor",option:[{href:"/asset",name:"我的资产",value:"0.00"},{href:"",name:"预期收益",value:"0.00"},{href:"/profit?status=1",name:"历史收益",value:"0.00"}]},menu4:{className:"menu_2col_infoAnchor",option:[{href:"/asset",name:"我的资产",value:"0.00"},{href:"",name:"预期收益",value:"0.00"}]}},t["default"]=h},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(t,"__esModule",{value:!0});var c=n(1),s=n(6),l=(r(s),function(e){function t(e){a(this,t);var n=o(this,Object.getPrototypeOf(t).call(this,e));return n.state={vip:"普通会员",name:"***"},n}return i(t,e),u(t,[{key:"componentDidMount",value:function(){var e=this;$.ajax({url:"/api/getauth",success:function(t){if(200===t.code)$.ajax({type:"post",url:"/api/getauth",success:function(t){e.setState({vip:t.vip,name:t.name})}});else{var n=e.props.store;n.dialog?n.dialog.component.setState({html:React.createElement("a",{className:"longBtn",href:"/signin"},"登录/注册")}):n.warning.component.setState({message:t.message})}}})}},{key:"render",value:function(){return React.createElement("div",{className:"info common"},""+this.state.vip+this.state.name+",你好!")}}]),t}(c.Component));l.defaultProps={setting:[{name:"common",value:"普通会员"},{name:"jadeite",value:"翡翠会员"},{name:"platinum",value:"铂金会员"},{name:"diamond",value:"钻石会员"}]},t["default"]=l},,,,,,,,,,,function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(t,"__esModule",{value:!0}),t.init=void 0;var c=n(1),s=n(2),l=r(s),f=n(5),p=n(3),m=n(8),h=r(m),d=n(7),v=r(d),y=n(4),g=r(y),b=f.createStore(function(){var e=arguments.length<=0||void 0===arguments[0]?[]:arguments[0],t=arguments[1];if(e[t.type])for(var n in t)e[t.type][n]=t[n];else e[t.type]=t;return e}),w=function(e){function t(e){a(this,t);var n=o(this,Object.getPrototypeOf(t).call(this,e));return n.state={value:e.value},n}return i(t,e),u(t,[{key:"componentDidMount",value:function(){var e=this;this.props.url&&$.ajax({url:this.props.url,success:function(t){e.setState({value:t.total+"张"})}})}},{key:"render",value:function(){return React.createElement("a",{href:this.props.href},React.createElement("h1",null,React.createElement("span",null,this.props.name),React.createElement("em",null,this.state.value)))}}]),t}(c.Component),O=function(e){function t(){return a(this,t),o(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),u(t,[{key:"render",value:function(){var e=[],t=this.props.setting;return t.map(function(t,n){e.push(React.createElement(w,{name:t.name,value:t.value,url:t.url,href:t.href,key:n}))}),React.createElement("div",{className:"option"},e)}}]),t}(c.Component);O.defaultProps={setting:[{name:"红包",value:"0张",url:"/api/getbonus",href:"/bonus"},{name:"加息券",value:"0张",href:"/interest"},{name:"历史收益",value:"查看",href:"/profit"}]};var x=function(e){function t(){return a(this,t),o(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),u(t,[{key:"componentDidMount",value:function(){b.dispatch({type:"warning",component:this.refs.warning}),p.QueryString("all")}},{key:"render",value:function(){return React.createElement("div",{className:"page"},React.createElement("div",{className:"warning"},React.createElement(g["default"],{ref:"warning"})),React.createElement(h["default"],{store:b.getState()}),React.createElement(v["default"],{type:4,store:b.getState()}),React.createElement(O,null))}}]),t}(c.Component),E=function R(){p.PageData.setData(null,function(){l["default"].render(React.createElement(x,null),document.body)}).render(R)};t.init=E}]);